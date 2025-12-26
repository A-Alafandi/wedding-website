require("dotenv").config();
const dns = require('dns');

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");

// -------------------- Configuration --------------------
const PORT = Number(process.env.PORT || 3001);
const EMAIL_FROM = "alafandi.a92@gmail.com";
const EMAIL_TO = ["abdulrazak.alafandi@hotmail.com", "satya.piccioni@gmail.com"];

const app = express();
app.set("trust proxy", 1);

// -------------------- Security & Middleware --------------------
app.use(helmet());
app.use(express.json({ limit: "50kb" }));

// CORS Setup
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.FRONTEND_URL,
].filter(Boolean); // Removes undefined values

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("CORS blocked"));
        },
        credentials: false,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Rate Limits
const generalLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 500 }); // Read limit
const writeLimiter = rateLimit({ windowMs: 10 * 60 * 1000, limit: 30 });   // Write limit

app.use(generalLimiter);

// -------------------- Database & Email --------------------
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    enableKeepAlive: true,
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },

    family: 4,
});

transporter.verify((error, success) => {
    if (error) {
        console.error("❌ SMTP Connection Error:", error);
    } else {
        console.log("✅ Server is ready to take our messages");
    }
});
// -------------------- API Endpoints --------------------

// 1. RSVP Endpoint
app.post("/api/rsvp", writeLimiter, async (req, res) => {
    try {
        const { name, email, attending, guests, plus_one_name, song_request, message } = req.body;

        // Validation
        if (!name || name.trim().length < 2) {
            return res.status(400).json({ message: "Valid name is required" });
        }

        // Logic: Force guests between 1 and 2
        const attendingBool = Boolean(attending);
        const guestsNum = Math.min(Math.max(Number(guests) || 1, 1), 2);
        const partnerName = (guestsNum === 2 && plus_one_name) ? plus_one_name.trim() : "";

        // Database Insert
        const insertQuery = `
            INSERT INTO rsvps 
            (name, email, attending, guests, plus_one_name, song_request, message)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        await pool.query(insertQuery, [
            name.trim(),
            email ? email.trim() : "",
            attendingBool ? 1 : 0,
            guestsNum,
            partnerName,
            song_request ? song_request.trim() : "",
            message ? message.trim() : "",
        ]);

        // Email Notification (Fire & Forget)
        const mailOptions = {
            from: EMAIL_FROM,
            to: EMAIL_TO,
            subject: `💌 New RSVP: ${name.trim()}`,
            text: `
NEW WEDDING RSVP
----------------
Name:    ${name.trim()}
Email:   ${email || "N/A"}
Status:  ${attendingBool ? "Yes" : "No"}
Guests:  ${guestsNum}
Plus +1: ${partnerName || "N/A"}
Song:    ${song_request || "None"}
Msg:     ${message || "None"}
`,
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) console.error("Email Error:", err.message);
        });

        res.status(201).json({ message: "RSVP saved successfully" });

    } catch (err) {
        console.error("RSVP Error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 2. Guest Messages Endpoint
app.post("/api/messages", writeLimiter, async (req, res) => {
    try {
        const { name, message } = req.body;

        if (!name || name.trim().length < 2) return res.status(400).json({ message: "Name required" });
        if (!message || message.trim().length < 2) return res.status(400).json({ message: "Message required" });

        await pool.query(
            `INSERT INTO guest_messages (name, message) VALUES (?, ?)`,
            [name.trim(), message.trim()]
        );

        res.status(201).json({ message: "Message saved" });

    } catch (err) {
        console.error("Message Error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 3. Health Check
app.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({ status: "ok", db: "connected" });
    } catch (err) {
        console.error("Health Check Failed:", err.message);
        res.status(500).json({ status: "error", db: "disconnected" });
    }
});

// -------------------- Server Start --------------------
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Backend running on port ${PORT}`);
});
