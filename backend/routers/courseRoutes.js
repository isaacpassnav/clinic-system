const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Cursos
router.get("/", courseController.getCourses);           // /courses/
router.post("/", courseController.createCourse);        // /courses/
router.put("/:id", courseController.updateCourse);      // /courses/:id
router.delete("/:id", courseController.deleteCourse);   // /courses/:id

module.exports = router;
