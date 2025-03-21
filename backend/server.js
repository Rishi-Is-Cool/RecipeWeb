require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// API Route to Handle Form Submission
app.post("/submit-form", async (req, res) => {
    const { name, email, subject, message, subscribed } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO messages (full_name, email, subject, message, subscribed) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, email, subject, message, subscribed]
        );
        res.json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error saving data" });
    }
});

// Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
