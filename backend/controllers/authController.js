const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getPool} = require('../config/db');
const {signAccessToken, signRefreshToken} = require('../utils/generateToken');

const isProd = process.env.NODE_ENV === 'production';
const REFRESH_COOKIE_MAX_DAYS = parseInt(process.env.REFRESH_COOKIE_DAYS || "7", 10);

const refreshCookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'None' : 'Lax',
    path: '/auth/refresh',
    maxAge: 1000 * 60 * 60 * 24 * REFRESH_COOKIE_MAX_DAYS,
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email y password requeridos" });

    email = email.toLowerCase().trim();
    const pool = getPool();
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(401).json({ message: "Credenciales inválidas" });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Credenciales inválidas" });

    // payload mínimo para access token (incluye email para tus logs)
    const payload = { id: user.id, role: user.role, email: user.email };

    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken({ id: user.id, token_type: "refresh" }); // payload corto

    // set cookie de refresh
    res.cookie("refreshToken", refreshToken, refreshCookieOptions);

    res.status(200).json({
      message: user.role === "admin" ? `Welcome back, Admin ${user.full_name}!` : `Welcome back, ${user.full_name}`,
      user: {
        id: user.id,
        name: user.full_name,
        email: user.email,
        role: user.role,
      },
      token: accessToken, // access token (10m)
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
};

const  refresh = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    // Emitimos un nuevo access y rotamos refresh por seguridad
    const payload = { id: decoded.id, role: decoded.role, email: decoded.email };
    const accessToken = signAccessToken(payload);
    const newRefresh = signRefreshToken({ id: decoded.id, token_type: "refresh" });

    res.cookie("refreshToken", newRefresh, refreshCookieOptions);
    res.status(200).json({ token: accessToken });
  } catch (err) {
    console.error("Refresh error:", err.message);
    res.status(401).json({ message: "Refresh token inválido o expirado" });
  }
};

const logout = async (req, res) => {
  try {
    // limpiar cookie (debe coincidir el mismo path/opciones principales)
    res.clearCookie("refreshToken", { ...refreshCookieOptions, maxAge: 0 });
    res.status(200).json({ message: "Logged out" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed" });
  }
};
module.exports = { login, refresh, logout };