const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
require('dotenv').config();
const { connectDB } = require('./config/db');
const router = require('./routers');

const app = express();
const PORT = process.env.PORT || 5800;

app.use(helmet());
app.use(express.json({limit: "500kb"}));
app.use(cookieParser()); 
app.use(xss());



app.use(cors({
  origin: process.env.CLIENT_URL, //  poner tu frontend (ej: "http://localhost:5173")
  credentials: true,     
  methods:['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const authLimiter = rateLimit({windowMs: 15*60*1000, max: 100, standarHTTPHeaders: true, legacyHeaders: false});
connectDB();
app.use("/auth", authLimiter);
app.use("/", authLimiter, router);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
