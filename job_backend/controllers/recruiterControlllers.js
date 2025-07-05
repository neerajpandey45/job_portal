const Recruiter = require("../models/recruiter");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.createRecruiter = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      companyName,
      location,
      pincode,
      state,
      email,
      password,
      confirmPassword,
    } = req.body;

    if (
      !firstName ||
      !companyName ||
      !location ||
      !pincode ||
      !state ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res
        .status(400)
        .json({ error: "Please fill all required fields." });
    }

    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({ error: "Recruiter already exists." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    // ✅ Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newRecruiter = new Recruiter({
      firstName,
      lastName,
      companyName,
      location,
      pincode,
      state,
      email,
      password: hashedPassword, // ✅ hashed
    });

    await newRecruiter.save();

    res.status(201).json({ message: "Recruiter created successfully." });
  } catch (error) {
    console.error("Error creating recruiter:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
exports.loginRecruiter = async (req, res) => {
  try {
    const { email, password } = req.body;

    const recruiter = await Recruiter.findOne({ email });
    if (!recruiter) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, recruiter.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // ✅ Create JWT token
    const token = jwt.sign(
      { recruiterId: recruiter._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Send token in httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true in production
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // ✅ Send basic recruiter data
    res.status(200).json({
      message: "Login successful",
      recruiter: {
        id: recruiter._id,
        firstName: recruiter.firstName,
        email: recruiter.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
exports.logoutRecruiter=async(req,res)=>{
  res.clearCookie("token", {
  httpOnly: true,
  sameSite: "Lax",
  secure: false, // set to true in production (https)
});
res.status(200).json({msg:"logout successfully"});
}