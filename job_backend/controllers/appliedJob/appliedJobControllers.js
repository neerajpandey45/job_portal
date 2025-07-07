const AppliedJob = require("../../models/appliedJobs/userAppliedJobs");

exports.applyJob = async (req, res) => {
  try {
    const userId = req.userId;
    const jobId = req.params.jobId;
    const { name, email, contactNumber } = req.body;
    if (!name || !email || !contactNumber)
       return res.status(400).json({ msg: "all fields are required" });
    const alreadyApplied = await AppliedJob.findOne({ userId, jobId });
    if (alreadyApplied)
      return res.status(404).json({ msg: "already applied this job" });
    const application = new AppliedJob({
      userId,
      jobId,
      name,
      email,
      contactNumber,
    });
    await application.save();
    return res.status(200).json({msg:"successfully applied"})
  } catch (err) {
      console.error("Application error:", err);
    res.status(500).json({ msg: "Application failed", error: err.message });
  }
};

exports.getAllAppliedJobs=async(req,res)=>{
  try{
     const userId = req.userId;
      const allJobs= await AppliedJob.find({userId}).populate("jobId");
     res.json(allJobs);
  }catch(err){
    console.log("error",err);
  }
}