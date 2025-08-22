const jwt = require("jsonwebtoken");

const ACCESS_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "10m";   
const REFRESH_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES || "7d"; 

function signAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
}

function signRefreshToken(payload) {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
}

module.exports = { signAccessToken, signRefreshToken };
