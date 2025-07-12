const AppliedJob = require("../../models/appliedJobs/userAppliedJobs");
const upload=require("../../middlewares/usersUploadedResume/uploadedResume")
const job=require("../../models/jobs/jobs")
exports.applyJob = [
  upload.single("resume"),
  async (req, res) => {
  try {
    const userId = req.userId;
    const jobId = req.params.jobId;
    const { name, email, contactNumber } = req.body;
    if (!name || !email || !contactNumber)
       return res.status(400).json({ msg: "all fields are required" });
    const alreadyApplied = await AppliedJob.findOne({ userId, jobId });
    if (alreadyApplied)
      return res.status(404).json({ msg: "already applied this job" });

      const jobData = await job.findById(jobId);
    if (!jobData) return res.status(404).json({ msg: "Job not found" });

    const application = new AppliedJob({
      userId,
      jobId,
      name,
      email,
      contactNumber,
        resume: `/usersUploadedResume/resumes/${req.file.filename}`,
       jobSnapshot: {
        title: jobData.title,
        companyName: jobData.companyName,
        location: jobData.location,
        experience: jobData.experience,
        jobType: jobData.jobType,
        description: jobData.description,
      },
    });
    await application.save();
    return res.status(200).json({msg:"successfully applied"})
  } catch (err) {
      console.error("Application error:", err);
    res.status(500).json({ msg: "Application failed", error: err.message });
  }
},
];
exports.getAllAppliedJobs = async (req, res) => {
  try {
    const userId = req.userId;
    const allJobs = await AppliedJob.find({ userId }).populate("jobId");

    res.status(200).json(allJobs); // ✅ return all, even if jobId is null
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ msg: "Something went wrong" });
  }
};
