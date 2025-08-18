const bcrypt = require("bcrypt");
const { getPool } = require("../config/db");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const pool = getPool();
  try {
    const { full_name, email, password, phone, address, city, state } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({ message: "Full name, email and password are required" });
    }

    const [existing] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (full_name, email, password, phone, address, city, state, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [full_name, email, hashedPassword, phone || null, address || null, city || null, state || null, "user"]
    );

    const newUser = { id: result.insertId, full_name, email, role: "user" };
    const token = generateToken(newUser);

    res.status(201).json({ message: "✅ User registered", user: newUser, token });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

const loginUser = async (req, res) => {
  const pool = getPool();
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: "10m" }
    );

    const message =
      user.role === "admin"
        ? `Welcome back, Admin ${user.full_name}!`
        : `Welcome back, ${user.full_name}`;
        
    res.status(200).json({
      message,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

const updateUser = async (req, res) => {
  const pool = getPool();
  try {
    const userId = parseInt(req.params.id);
    const { full_name, email, password, phone, address, city, state } = req.body;

    if (isNaN(userId)) return res.status(400).json({ message: "Invalid user ID" });

    const updateFields = [];
    const values = [];

    if (full_name) {
      updateFields.push("full_name = ?");
      values.push(full_name);
    }
    if (email) {
      updateFields.push("email = ?");
      values.push(email);
    }
    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updateFields.push("password = ?");
      values.push(hashed);
    }
    if (phone) {
      updateFields.push("phone = ?");
      values.push(phone);
    }
    if (address) {
      updateFields.push("address = ?");
      values.push(address);
    }
    if (city) {
      updateFields.push("city = ?");
      values.push(city);
    }
    if (state) {
      updateFields.push("state = ?");
      values.push(state);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }

    values.push(userId);
    const query = `UPDATE users SET ${updateFields.join(", ")} WHERE id = ?`;

    const [result] = await pool.query(query, values);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.error("Update user error:", err);
    res.status(500).json({ message: "Failed to update user", error: err.message });
  }
};

module.exports = { registerUser, loginUser, updateUser };