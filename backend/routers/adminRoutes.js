const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const verifyToken = require("../middlewares/verifyToken");

// Rutas de administración de usuarios
router.get("/", verifyToken, authorizeAdmin, adminController.getAllUsers);           // /admin/users/
router.get("/:id", verifyToken, authorizeAdmin, adminController.getUserById);        // /admin/users/:id
router.put("/:id", verifyToken, authorizeAdmin, adminController.updateUserAsAdmin);  // /admin/users/:id
router.delete("/:id", verifyToken, authorizeAdmin, adminController.deleteUserAsAdmin); // /admin/users/:id

module.exports = router;
