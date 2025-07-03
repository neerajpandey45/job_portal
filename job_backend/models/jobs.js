const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  experience: String,
  skills: String,
  description: String,
  jobType: String,
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
    required: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);