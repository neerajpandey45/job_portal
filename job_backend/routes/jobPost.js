const express=require("express");
const router=express.Router();
// const Jobs=require("../models/jobs");
const jobControllers=require("../controllers/jobControllers");
const authRecruiter = require("../middlewares/authRecruiter");
router.post("/jobpost", authRecruiter, jobControllers.jobpost);
router.get("/recruiterjobs",authRecruiter,jobControllers.getRecruiterJobs);
module.exports=router;