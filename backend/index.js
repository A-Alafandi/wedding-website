require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mysql = require("mysql2/promise");

const app = express();
app.set("trust proxy", 1);

// -------------------- Security + parsing --------------------
app.use(helmet());
app.use(express.json({ limit: "50kb" }));

// -------------------- CORS (locked) --------------------
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:8080",
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
    ...(process.env.FRONTEND_URL_2 ? [process.env.FRONTEND_URL_2] : []),
].filter(Boolean);

const allowedOriginsUnique = Array.from(new Set(allowedOrigins));

app.use(
    cors({
        origin: (origin, cb) => {
            if (!origin) return cb(null, true);
            if (allowedOriginsUnique.includes(origin)) return cb(null, true);
            return cb(new Error(`CORS blocked for origin: ${origin}`));
        },
        credentials: false,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// -------------------- Rate limits --------------------
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 500,
        standardHeaders: "draft-7",
        legacyHeaders: false,
    })
);

const writeLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 30,
    standardHeaders: "draft-7",
    legacyHeaders: false,
});

// -------------------- Required env vars --------------------
const requiredEnv = ["DB_HOST", "DB_PORT", "DB_USER", "DB_PASSWORD", "DB_NAME"];
const missing = requiredEnv.filter((k) => !process.env[k]);

if (missing.length) {
    console.error("❌ Missing required env vars:", missing.join(", "));
    process.exit(1);
}

const PORT = Number(process.env.PORT || 3001);

// -------------------- Pool creation + recreation --------------------
function createPool() {
    return mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,

        // Helps a bit on proxies
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
        connectTimeout: 15000,

        // Reduce stale pooled connections (mysql2 supports these)
        idleTimeout: 30000, // 30s
        maxIdle: 2,
    });
}

let pool = createPool();

async function recreatePool() {
    try {
        const oldPool = pool;
        pool = createPool();
        // Close old pool in background-ish (await is fine)
        await oldPool.end();
    } catch {
        // ignore pool close errors
    }
}

// Detect transient proxy/network errors
function isTransientDbError(err) {
    const msg = String(err?.message || "").toLowerCase();
    const code = err?.code;

    return (
        code === "PROTOCOL_CONNECTION_LOST" ||
        code === "ECONNRESET" ||
        code === "ETIMEDOUT" ||
        code === "EPIPE" ||
        msg.includes("connection lost") ||
        msg.includes("server closed the connection") ||
        msg.includes("read econnreset") ||
        msg.includes("handshake inactivity timeout") ||
        msg.includes("connection is in closed state")
    );
}

async function queryWithRetry(sql, params = [], retries = 4) {
    try {
        return await pool.query(sql, params);
    } catch (err) {
        if (!isTransientDbError(err) || retries <= 0) {
            throw err;
        }

        // Recreate pool so we don't keep reusing a dead connection
        await recreatePool();

        // backoff
        const delay = (5 - retries) * 250; // 250ms, 500ms, 750ms...
        await new Promise((r) => setTimeout(r, delay));

        return queryWithRetry(sql, params, retries - 1);
    }
}

// -------------------- Optional DB bootstrap --------------------
async function bootstrapDatabase() {
    console.log("🛠️ DB bootstrap enabled");

    // admin connection without database
    const adminConn = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectTimeout: 15000,
    });

    await adminConn.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
    await adminConn.end();

    console.log(`✅ Database '${process.env.DB_NAME}' ready`);

    await queryWithRetry(`
    CREATE TABLE IF NOT EXISTS rsvps (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      attending TINYINT(1) NOT NULL,
      guests INT NOT NULL DEFAULT 0,
      dietary VARCHAR(255) DEFAULT '',
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

    await queryWithRetry(`
    CREATE TABLE IF NOT EXISTS guest_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

    console.log("✅ Tables ready");
}

// -------------------- Admin auth (Basic Auth) --------------------
function requireAdmin(req, res, next) {
    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUser || !adminPassword) {
        return res.status(503).json({ message: "Admin access not configured" });
    }

    const auth = req.headers.authorization || "";
    if (!auth.startsWith("Basic ")) {
        res.setHeader("WWW-Authenticate", 'Basic realm="Wedding Admin"');
        return res.status(401).json({ message: "Authentication required" });
    }

    const base64 = auth.replace("Basic ", "");
    let decoded = "";
    try {
        decoded = Buffer.from(base64, "base64").toString("utf8");
    } catch {
        return res.status(400).json({ message: "Invalid auth header" });
    }

    const [user, pass] = decoded.split(":");
    if (user === adminUser && pass === adminPassword) return next();

    return res.status(403).json({ message: "Forbidden" });
}

// -------------------- Health + Debug --------------------
app.get("/health", async (req, res) => {
    try {
        await queryWithRetry("SELECT 1");
        res.json({ ok: true, db: "up" });
    } catch (err) {
        console.error("Health error:", err?.message || err);
        res.status(500).json({ ok: false, db: "down" });
    }
});

app.get("/debug/db", async (req, res) => {
    try {
        const [rows] = await queryWithRetry("SELECT DATABASE() AS db");
        res.json({ db: rows?.[0]?.db || null });
    } catch {
        res.status(500).json({ error: "db check failed" });
    }
});

// -------------------- Public endpoints --------------------
app.post("/api/rsvp", writeLimiter, async (req, res) => {
    try {
        const { name, attending, guests, dietary, message } = req.body;

        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return res.status(400).json({ message: "Name is required (min 2 chars)" });
        }

        const attendingBool = Boolean(attending);
        const guestsNum =
            guests === undefined || guests === null || guests === ""
                ? 0
                : Number(guests);

        if (!Number.isFinite(guestsNum) || guestsNum < 0 || guestsNum > 10) {
            return res.status(400).json({ message: "Guests must be a number between 0 and 10" });
        }

        const dietarySafe = typeof dietary === "string" ? dietary.trim().slice(0, 255) : "";
        const messageSafe = typeof message === "string" ? message.trim().slice(0, 1000) : "";

        await queryWithRetry(
            `
                INSERT INTO rsvps (name, attending, guests, dietary, message)
                VALUES (?, ?, ?, ?, ?)
            `,
            [name.trim().slice(0, 120), attendingBool ? 1 : 0, guestsNum, dietarySafe, messageSafe]
        );

        res.status(201).json({ message: "RSVP saved" });
    } catch (err) {
        console.error("POST /api/rsvp error:", err?.message || err);
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/api/messages", writeLimiter, async (req, res) => {
    try {
        const { name, message } = req.body;

        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return res.status(400).json({ message: "Name is required (min 2 chars)" });
        }
        if (!message || typeof message !== "string" || message.trim().length < 2) {
            return res.status(400).json({ message: "Message is required (min 2 chars)" });
        }

        await queryWithRetry(
            `INSERT INTO guest_messages (name, message) VALUES (?, ?)`,
            [name.trim().slice(0, 120), message.trim().slice(0, 1000)]
        );

        res.status(201).json({ message: "Message saved" });
    } catch (err) {
        console.error("POST /api/messages error:", err?.message || err);
        res.status(500).json({ message: "Server error" });
    }
});

// -------------------- Admin-only endpoints --------------------
app.get("/api/rsvps", requireAdmin, async (req, res) => {
    try {
        const [rows] = await queryWithRetry("SELECT * FROM rsvps ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error("GET /api/rsvps error:", err?.message || err);
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/api/rsvp-stats", requireAdmin, async (req, res) => {
    try {
        const [rows] = await queryWithRetry(`
            SELECT
                SUM(attending = 1) AS attending,
                SUM(attending = 0) AS notAttending,
                COUNT(*) AS total
            FROM rsvps
        `);
        res.json(rows[0] || { attending: 0, notAttending: 0, total: 0 });
    } catch (err) {
        console.error("GET /api/rsvp-stats error:", err?.message || err);
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/api/admin/messages", requireAdmin, async (req, res) => {
    try {
        const [rows] = await queryWithRetry(
            "SELECT * FROM guest_messages ORDER BY created_at DESC"
        );
        res.json(rows);
    } catch (err) {
        console.error("GET /api/admin/messages error:", err?.message || err);
        res.status(500).json({ message: "Server error" });
    }
});

// -------------------- Start --------------------
(async () => {
    try {
        if (process.env.DB_BOOTSTRAP === "true") {
            await bootstrapDatabase();
        }

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`✅ Backend running on port ${PORT}`);
            console.log("✅ Allowed CORS origins:", allowedOriginsUnique);
            console.log("✅ Using DB:", process.env.DB_NAME);
        });
    } catch (err) {
        console.error("❌ Startup failed:", err?.message || err);
        process.exit(1);
    }
})();
