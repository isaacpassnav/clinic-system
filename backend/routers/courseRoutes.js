const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const verifyToken = require("../middlewares/verifyToken");


router.get("/", verifyToken, courseController.getCourses);            
router.post("/create", verifyToken, authorizeAdmin, courseController.createCourse);   
router.put("/:id", verifyToken, authorizeAdmin, courseController.updateCourse);       
router.delete("/:id", verifyToken, authorizeAdmin, courseController.deleteCourse);    
module.exports = router;

