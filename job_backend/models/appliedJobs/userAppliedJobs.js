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
   name: String,
  email: String,
  contactNumber: String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model("Applied Job",appliedJobs);
