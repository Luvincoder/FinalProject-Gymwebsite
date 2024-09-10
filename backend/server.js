// server.js

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("./db"); // Import the database pool
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

// User registration route
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if username or email already exists
    const userCheck = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );

    if (userCheck.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "Username or Email already exists." });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save user to the database
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    res.json({
      message: "User registered successfully!",
      user: newUser.rows[0],
    });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// User login route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length === 0) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    const isValidPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful!", token });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Example protected route
app.get("/protected", (req, res) => {
  res.json({ message: "This is a protected route" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
