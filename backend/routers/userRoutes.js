const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

// Rutas públicas
router.post("/register", userController.registerUser); 
router.post("/login", userController.loginUser);       

// Rutas protegidas
router.put("/:id", verifyToken, userController.updateUser);         // /users/:id

module.exports = router;
