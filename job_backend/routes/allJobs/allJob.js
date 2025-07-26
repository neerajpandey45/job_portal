// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const Job = require("../../models/jobs/jobs");
const filterJob=require("../../controllers/jobs/jobControllers")
// GET all jobs
router.get("/job",filterJob.getFilterJob);// for filter jobs

router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().populate("recruiterId", "name email"); // Optional: populate recruiter info
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs", error: err.message });
  }
});
router.get("/:id",async (req,res)=>{
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
