const express=require("express");
const router=express.Router();
const Recruiter = require("../models/recruiter");
const recruiterControlllers=require("../controllers/recruiterControlllers")
const authRecruiter = require("../middlewares/authRecruiter");
router.post("/register",recruiterControlllers.createRecruiter);
router.post("/login",recruiterControlllers.loginRecruiter);
router.get("/profile", authRecruiter, async (req, res) => {
  const recruiter = await Recruiter.findById(req.recruiterId).select("firstName lastName email");
  if (!recruiter) return res.status(404).json({ error: "Recruiter not found" });
  res.json(recruiter);
});
router.post("/logout",recruiterControlllers.logoutRecruiter);
module.exports = router;