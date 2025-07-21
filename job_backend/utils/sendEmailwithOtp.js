const nodemailer = require("nodemailer");
const sendEmailWithOtp = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neerajalternate4@gmail.com",
      pass: "oxtxhvjaefrnsauq", // ✅ paste 16-character app password here
    },
    secure: true, // ✅ make sure it's a secure connection
  });

  const mailOptions = {
    from: "neerajalternate4@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP for password reset is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);
  } catch (err) {
    console.error("Error sending OTP email:", err);
    throw new Error(`Failed to send OTP email: ${err.message}`);
  }
};

module.exports = sendEmailWithOtp;
