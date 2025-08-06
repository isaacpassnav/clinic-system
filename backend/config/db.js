const mysql = require('mysql2/promise');
require('dotenv').config();

let pool;

const connectDB = async () => {
    try {
        pool = await mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
        console.log('✅ MySQL connected successfully.');     
    } catch (err) {
        console.error('❌ MySQL connection error:', err.message);
        process.exit(1);
    }
};

const getPool = () => {
  if (!pool) throw new Error("❌ Pool not initialized. Call connectDB() first.");
  return pool;
};

module.exports = { connectDB, getPool };