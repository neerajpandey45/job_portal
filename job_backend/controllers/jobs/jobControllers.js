
const Jobs = require("../../models/jobs/jobs");
exports.jobpost = async (req, res) => {
  try {
    const {
      title,
      companyName,
      jobType,
      location,
      experience,
      salary,
      skills,
      description,
      fullDescriptions,
    } = req.body;
    const recruiterId = req.recruiterId; // should be set by middleware
    console.log("Recruiter ID:", recruiterId); // ✅ debug
    if (
      !title ||
      !companyName ||
      !jobType ||
      !location ||
      !experience ||
      !salary ||
      !skills ||
      !description ||
      !fullDescriptions
    ) {
      return res.status(404).json({ error: "all fields are required" });
    }
    const existingJob = await Jobs.findOne({
      title,
      location,
      recruiterId,
    });
    if (existingJob) {
      return res.status(409).json({ error: "You have already posted this." });
    }

    const newJob = new Jobs({
      title,
      companyName,
      jobType,
      location,
      experience,
      salary,
      skills,
      description,
      fullDescriptions,
      recruiterId: req.recruiterId, // comes from auth middleware
    });
    await newJob.save();
    res.status(201).json({ msg: "posted succesfully:" });
  } catch (err) {
    console.error("Job post error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
exports.getRecruiterJobs = async (req, res) => {
  try {
    const recruiterId = req.recruiterId;
    const jobs = await Jobs.find({ recruiterId });
    res.status(200).json({
      total: jobs.length,
      jobs,
    });
  } catch (err) {
    console.log("error in fetching jobs", err);
    res.status(500).json({ msg: "server error" });
  }
};
exports.deleteJobs=async(req,res)=>{
  try{
    const recruiterId=req.recruiterId;
    const jobId=req.params.jobId;
    const job=await Jobs.findByIdAndDelete({_id:jobId,recruiterId:recruiterId});

    if(!job) {
      return res.status(404).json({msg:"not find any job or unauthrized"}) ;
    }
    res.status(200).json({msg:"successfully deleted"});
  }
  catch(err){
    console.error("Delete job error:", err);
    res.status(500).json({ error: "Server error" });
  }
}
