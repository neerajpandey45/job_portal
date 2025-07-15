const AppliedJob = require("../../models/appliedJobs/userAppliedJobs"); // ✅ application model
const Job = require("../../models/jobs/jobs"); // ✅ job model

exports.getJobApplications = async (req, res) => {
  try {
    const recruiterId = req.recruiterId;
    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);
    console.log("job.recruiterId:", job.recruiterId);
console.log("req.recruiterId from token:", recruiterId);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (!job.recruiterId || job.recruiterId.toString() !== recruiterId) {
      return res.status(403).json({ error: "No applications for this job" });
    }
    const applications = await AppliedJob.find({ jobId: jobId }).select("name email contactNumber resume");
    res.status(200).json({
      totalApplications: applications.length,
      applicants: applications,
    });
  } catch (err) {
    console.error("Error in getJobApplications:", err);
    res.status(500).json({ error: "Server error" });
  }
};