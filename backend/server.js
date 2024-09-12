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

// Middleware to verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  
  if (!token) {
    return res.status(403).json({ error: "Access denied, token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

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
    console.error("Error registering user:", err.message);
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
    console.error("Error during login:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Example protected route (Requires JWT token)
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `This is a protected route for user ID ${req.user.id}` });
});

// Global error-handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Something went wrong, please try again later." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
