// routes/user.js
const User = require("../models/user");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const authenticateToken = require("../middlewares/authUsers");
router.get("/check", authenticateToken, (req, res) => {
  res.json({ authenticated: true, userId: req.user });
});
// GET /api/users
router.get("/", userController.getAllUsers);
// POST /api/users
router.post("/register", userController.createUser);
// POST /api/users/login
router.post("/login", userController.loginUser);
router.get("/profile", authenticateToken, async (req, res) => {
  const userProfile = await User.findById(req.userId).select("firstName lastName email");
  if (!userProfile) return res.status(400).json({ error: "user not found" });
  res.status(200).json(userProfile);
});

router.post("/logout",userController.logoutUser);

module.exports = router;
