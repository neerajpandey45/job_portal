const User = require("../../models/users/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// GET all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role = "user" } = req.body;
    //validation
    if (!firstName || !email || !password) {
      return res
        .status(400)
        .json({ error: "firstname ,email and password is require" });
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ erro: "Invalid email format" });
    }
      // ✅ Password strength regex
    const passwordRegex = /^[A-Za-z]{1,10}[@#$%^&*!._-]{1}[0-9]{1,5}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
        "Password must be in format: letters + one special character + numbers (e.g. Neeraj@3000), 8–15 characters long.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "user already exits" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password, role });
    await newUser.save();

    const userWithoutPassword = { ...newUser.toObject() };
    delete userWithoutPassword.password;

    res.status(201).json(userWithoutPassword);
  } catch (err) {
    console.error("created user error", err);
    if (err.name === "validationError") {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: "server error" });
  }
};
//login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  // Create token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return res.status(200).json({
    message: "Login successful",
    token, //frontend will store this
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
};
//logout user
exports.logoutUser = (req, res) => {
  res.status(200).json({ msg: "logout" });
};
// education section
exports.updateEducation = async (req, res) => {
  const { education } = req.body;
  try {
    const user = await User.findById(req.userId);
    console.log(user);
    user.education = education; // expects array of objects [{degree, institution}]
    await user.save();
    res
      .status(200)
      .json({ message: "Education updated", education: user.education });
  } catch (err) {
    res.status(500).json({ error: "Failed to update education" });
  }
};

//profile summary
exports.addSummary = async (req, res) => {
  const { summary } = req.body;
  try {
    const user = await User.findById(req.userId);
    console.log(user);
    user.summary = summary;
    await user.save();
    res.status(200).json({ message: "summary added", summary: user.summary });
  } catch (err) {
    res.status(500).json({ error: "Failed to add summary" });
  }
};
// skills section
exports.addSkills = async (req, res) => {
  const { skills } = req.body;
  try {
    const user = await User.findById(req.userId);
    console.log(user);
    user.skills = skills;
    await user.save();
    res.status(200).json({ message: "akiils added", skills: user.skills });
  } catch (err) {
    res.status(500).json({ error: "Failed to add skills" });
  }
};
// //user full profile details
exports.UserFullDeatils = async (req, res) => {
  const userProfile = await User.findById(req.userId).select(
    "firstName lastName email education summary skills profileImage"
  );
  if (!userProfile) return res.status(400).json({ error: "user not found" });
  res.status(200).json(userProfile);
};
