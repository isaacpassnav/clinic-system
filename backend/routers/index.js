const express = require("express");
const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/admin/users", require("./adminRoutes"));
router.use("/courses", require("./courseRoutes"));
router.use("/enrollments", require("./enrollmentRoutes"));

router.use("/auth", require("./authRoutes"));

module.exports = router;
