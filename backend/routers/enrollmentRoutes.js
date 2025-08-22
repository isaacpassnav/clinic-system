const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, enrollmentController.getEnrollments);         

router.post("/", verifyToken, enrollmentController.createEnrollment);      

router.delete("/:id", verifyToken, enrollmentController.deleteEnrollment); 

module.exports = router;

