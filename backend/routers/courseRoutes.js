const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const verifyToken = require("../middlewares/verifyToken");

// Cursos
router.get("/", courseController.getCourses);           // /courses/
router.post("/createcourse", courseController.createCourse);        // /courses/
router.put("/:id", courseController.updateCourse);      // /courses/:id
router.delete("/:id", courseController.deleteCourse);   // /courses/:id

module.exports = router;
