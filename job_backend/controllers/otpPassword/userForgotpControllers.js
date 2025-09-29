const User = require("../../models/users/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmailWithOtp =require("../../utils/sendEmailwithOtp");
exports.sendOtp = async (req, res) => {
  const { email } = req.body;
   const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    return res.status(400).json({ msg: "Invalid email format" });
  }
   const generateNumericOtp = (length = 6) => {
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // numeric only
    }
    return otp;
  };
  try {
    // 1️⃣ Find user by email

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });
    if (user.role !== "user") {
    return res.status(403).json({ error: "Not allowed to reset password from this route" });
  }
    const otp = generateNumericOtp(6);
      // console.log(otp);
    //3️⃣ Set expiry for 5 minutes
    const expiry = new Date(Date.now() + 5 * 60 * 1000); // store as Date object
    // 4️⃣ Update user document
    user.otp = otp;
    user.otpExpiry = expiry;
    await user.save();
    // 5️⃣ Send OTP via email
    await sendEmailWithOtp(email, otp);
    res.status(200).json({ msg: "OTP sent successfully to your email." });
  } catch (err) {
    // console.error("❌ Error in sendOtp:", err.message);
    res.status(500).json({ msg: "Failed to send OTP. Please try again later." });
  }
};
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user.role !== "user") {
  return res.status(403).json({ error: "Not allowed " });
}
    if (!user || user.otp !== otp || user.otpExpiry < Date.now())
     {
      return res.status(400).json({ msg: "Invalid or expired OTP" });
    }
    user.otp = null;
    user.otpExpiry = null;
    user.isOtpVerified = true; 
    await user.save();
    res.status(200).json({ msg: "OTP verified" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });
if (user.role !== "user") {
  return res.status(403).json({ error: "Not allowed to reset password from this route" });
}
     if (!user.isOtpVerified) {
      return res.status(401).json({ msg: "OTP verification required" });
    }
    user.password = newPassword;
    user.isOtpVerified = false;
    await user.save();
    res.status(200).json({ msg: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
