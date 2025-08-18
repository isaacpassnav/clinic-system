const express = require("express");
const router = express.Router();
const enrrollmentController = require("../controllers/enrrollmentController");


router.get("/", enrrollmentController.getEnrollments);         // /enrrollments/
router.post("/", enrrollmentController.createEnrollment);      // /enrrollments/
router.delete("/:id", enrrollmentController.deleteEnrrollment); // /enrrollments/:id

module.exports = router;
