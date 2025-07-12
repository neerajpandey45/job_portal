const express=require("express");
const router=express.Router();
const allApplication=require("../../controllers/recruiterApplications/recruiterApplication");
const authRecruiter=require("../../middlewares/authRecruiter");
router.get("/:jobId",authRecruiter,allApplication.getJobApplications);
module.exports = router;