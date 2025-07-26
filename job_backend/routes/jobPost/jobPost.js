const express=require("express");
const router=express.Router();
const jobControllers=require("../../controllers/jobs/jobControllers");
const authRecruiter=require("../../middlewares/authRecruiter");
router.post("/jobpost", authRecruiter, jobControllers.jobpost);
router.get("/recruiterjobs",authRecruiter,jobControllers.getRecruiterJobs);
router.delete("/:jobId",authRecruiter,jobControllers.deleteJobs);
module.exports=router;