-- Wedding Website Database Schema
-- Run this in your Railway MySQL database

CREATE DATABASE IF NOT EXISTS wedding_db;
USE wedding_db;

-- RSVP table
CREATE TABLE IF NOT EXISTS rsvp (
                                    id INT PRIMARY KEY AUTO_INCREMENT,
                                    guest_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    attending ENUM('yes', 'no') NOT NULL,
    plus_one BOOLEAN DEFAULT FALSE,
    plus_one_name VARCHAR(100),
    dietary_restrictions TEXT,
    message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_submitted_at (submitted_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Guests table (optional - for invited guests)
CREATE TABLE IF NOT EXISTS guests (
                                      id INT PRIMARY KEY AUTO_INCREMENT,
                                      invitation_code VARCHAR(20) UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    group_size INT DEFAULT 1,
    invitation_sent BOOLEAN DEFAULT FALSE,
    invitation_sent_at DATETIME,
    rsvp_status ENUM('pending', 'confirmed', 'declined') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_invitation_code (invitation_code),
    INDEX idx_rsvp_status (rsvp_status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Messages table (for guestbook feature)
CREATE TABLE IF NOT EXISTS messages (
                                        id INT PRIMARY KEY AUTO_INCREMENT,
                                        name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_approved (approved),
    INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data
INSERT INTO rsvp (guest_name, email, attending, plus_one, plus_one_name, dietary_restrictions, message) VALUES
                                                                                                            ('John Smith', 'john@example.com', 'yes', TRUE, 'Jane Smith', 'Vegetarian', 'Can''t wait to celebrate with you!'),
                                                                                                            ('Emily Johnson', 'emily@example.com', 'yes', FALSE, NULL, NULL, 'So happy for you both!'),
                                                                                                            ('Michael Brown', 'michael@example.com', 'no', FALSE, NULL, NULL, 'Wishing you all the best, sorry I can''t make it.');

-- Create a view for quick stats
CREATE VIEW rsvp_stats AS
SELECT
    COUNT(*) as total_responses,
    SUM(CASE WHEN attending = 'yes' THEN 1 ELSE 0 END) as attending_yes,
    SUM(CASE WHEN attending = 'no' THEN 1 ELSE 0 END) as attending_no,
    SUM(plus_one) as total_plus_ones,
        DATE(submitted_at) as response_date
        FROM rsvp
        GROUP BY DATE(submitted_at);

-- Create admin user (optional - for admin panel)
CREATE TABLE IF NOT EXISTS admin_users (
                                           id INT PRIMARY KEY AUTO_INCREMENT,
                                           username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin (password: admin123 - change this!)
INSERT INTO admin_users (username, password_hash) VALUES
    ('admin', '$2y$10$YourHashedPasswordHere');

-- Show tables
SHOW TABLES;

-- Test query
SELECT * FROM rsvp ORDER BY submitted_at DESC;
