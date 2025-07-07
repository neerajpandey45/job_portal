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
    const { firstName, lastName, email, password } = req.body;
    //validation
    if (!firstName || !email || !password) {
      return res
        .status(400)
        .json({ error: "firstname ,email and password is require" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ erro: "Invalid email format" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "user already exits" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    const userWithoutPassword = { ...newUser.toObject() };
    delete userWithoutPassword.password;

    res.status(201).json(userWithoutPassword);
  } catch (err) {
    console.error("create use erroe", err);
    if (err.name === "validationError") {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: "server error" });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  // Create token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  // ✅ Set token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production with https
    sameSite: "lax", //lax
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      email: user.email,
    },
  });
};

exports.logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, // set to true in production (https)
  });
  res.status(200).json({ msg: "logout" });
};
