const express = require("express");
const router = express.Router();
const applied = require("../../controllers/appliedJob/appliedJobControllers");
const allAppliedJobs=require("../../controllers/appliedJob/appliedJobControllers")
const authenticateUser = require("../../middlewares/authUsers");

router.post("/apply/:jobId", authenticateUser, applied.applyJob);
router.get("/appliedAlljobs",authenticateUser,allAppliedJobs.getAllAppliedJobs);
module.exports = router
