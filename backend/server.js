const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const { connectDB } = require('./config/db');
const router = require('./routers');

const app = express();
const PORT = process.env.PORT || 57126;

app.use(helmet());
app.use(express.json({ limit: "500kb" }));
app.use(cookieParser());

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.DEV_CLIENT_URL
];

app.use(cors({
  origin: function (origin, callback) {
    console.log("Petición desde:", origin); // Debug
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("🚨 Not allowed by CORS", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiter para proteger auth
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando 🚀" });
});

app.use("/auth", authLimiter);
app.use("/", authLimiter, router);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
