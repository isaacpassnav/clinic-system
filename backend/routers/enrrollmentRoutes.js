const express = require("express");
const router = express.Router();
const enrrollmentController = require("../controllers/enrrollmentController");


router.get("/", enrrollmentController.getEnrrollments);         
router.post("/", enrrollmentController.createEnrrollment);      
router.delete("/:id", enrrollmentController.deleteEnrrollment); 

module.exports = router;
