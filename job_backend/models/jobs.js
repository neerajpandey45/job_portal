const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
 title: String,
  companyName: String,
  jobType: String,
  location: String,
  experience: String,
  salary: String,
  skills:String,
  openings: Number,
  description: String,
  fullDescriptions: String,
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
    required: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);