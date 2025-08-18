const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {connectDB} = require('./config/db');
const router = require('./routers');


const app = express();
const PORT = process.env.PORT || 5800;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", router);

// app.get("/", (req, res) => {
//   res.send("✅ Backend running on Render!");
// });
app.listen(PORT, () => {
    console.log(`✅Server is running on port ${PORT}`);
});

