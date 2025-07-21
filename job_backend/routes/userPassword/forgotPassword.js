const User = require("../../models/users/user");
const express = require("express");
const router = express.Router();
const { sendOtp, verifyOtp, resetPassword }=require("../../controllers/otpPassword/userForgotpControllers");
// const authenticateToken = require("../../middlewares/authUsers");
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password",resetPassword);
module.exports = router;