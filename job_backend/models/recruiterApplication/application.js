const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  email: String,
  contact: String,
  resume: String, // maybe resume PDF path
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", applicationSchema);
