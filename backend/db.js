// db.js

const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

// Create a new pool of connections
const pool = new Pool({
  user: process.env.DB_USER,     // PostgreSQL username
  host: process.env.DB_HOST,     // PostgreSQL host
  database: process.env.DB_NAME, // PostgreSQL database name
  password: process.env.DB_PASSWORD, // PostgreSQL password
  port: process.env.DB_PORT,     // PostgreSQL port
});

// Test the connection to the PostgreSQL database
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to PostgreSQL:', result.rows);
  });
});

module.exports = pool;
