const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const verifyToken = require("../middlewares/verifyToken");

// Rutas de administración de usuarios
router.get("/", verifyToken, authorizeAdmin, adminController.getAllUsers);         
router.get("/:id", verifyToken, authorizeAdmin, adminController.getUserById);        
router.put("/:id", verifyToken, authorizeAdmin, adminController.updateUserAsAdmin);  
router.delete("/:id", verifyToken, authorizeAdmin, adminController.deleteUserAsAdmin); 

module.exports = router;
