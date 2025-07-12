const mongoose = require("mongoose");
const appliedJobs = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobId:{
      type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  jobSnapshot: {
    title: String,
    companyName: String,
    location: String,
    experience: String,
    jobType: String,
    description: String,
  },
   name: String,
  email: String,
  contactNumber: String,
  resume:String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model("Applied Job",appliedJobs);
