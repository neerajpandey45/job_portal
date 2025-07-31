const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
   profileImage: {
    type: String,
    default: "", // Optional: default empty path
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  summary: {
    type: String,
  },
  skills: [String],
  otp: String,
  otpExpiry: Date,
  isOtpVerified: {
  type: Boolean,
  default: false,
},
  education: [
    {
      degree: String,
      institution: String,
      startYear: Number,
      endYear: Number,
    },
  ],
  experience: [
    {
      company: String,
      designation: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      techStack: [String],
      link: String,
    },
  ],
   role:{
  type: String,
  enum: ["user", "admin"], // adjust based on your portal
  default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
module.exports = mongoose.model("User", userSchema);
