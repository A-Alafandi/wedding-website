// Database connection utility
import mysql from 'mysql2/promise';

// For production, use environment variables
const getDatabaseConfig = () => {
    if (process.env.NODE_ENV === 'production') {
        return {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        };
    }

    // Development configuration (using your Railway database)
    return {
        host: 'ballast.proxy.rlwy.net',
        port: 15216,
        user: 'root',
        password: 'hIHLqlOBlTYbUfAvUbvoDOoRZheNOsyD',
        database: 'wedding_db',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };
};

let pool;

const initializeDatabase = async () => {
    try {
        const config = getDatabaseConfig();
        pool = mysql.createPool(config);

        // Test connection
        const connection = await pool.getConnection();
        console.log('✅ Database connected successfully');
        connection.release();

        return pool;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        throw error;
    }
};

// Initialize database connection
initializeDatabase().catch(console.error);

export const query = async (sql, params) => {
    if (!pool) {
        await initializeDatabase();
    }

    try {
        const [results] = await pool.execute(sql, params);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
};

// RSVP-specific functions
export const saveRSVP = async (rsvpData) => {
    const sql = `
    INSERT INTO rsvp 
    (guest_name, email, attending, plus_one, plus_one_name, dietary_restrictions, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

    const params = [
        rsvpData.guestName,
        rsvpData.email,
        rsvpData.attending,
        rsvpData.plusOne ? 1 : 0,
        rsvpData.plusOneName || null,
        rsvpData.dietaryRestrictions || null,
        rsvpData.message || null
    ];

    return query(sql, params);
};

export const getRSVPs = async () => {
    const sql = 'SELECT * FROM rsvp ORDER BY submitted_at DESC';
    return query(sql);
};

export const getRSVPStats = async () => {
    const sql = `
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN attending = 'yes' THEN 1 ELSE 0 END) as attending_yes,
      SUM(CASE WHEN attending = 'no' THEN 1 ELSE 0 END) as attending_no,
      SUM(plus_one) as plus_ones
    FROM rsvp
  `;

    const results = await query(sql);
    return results[0];
};

export default pool;
