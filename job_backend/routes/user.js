// routes/user.js
const User = require("../models/user");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const authenticateToken = require("../middlewares/authMiddleware");
router.get("/me", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
});
// GET /api/users
router.get("/", userController.getAllUsers);

// POST /api/users
router.post("/register", userController.createUser);
// POST /api/users/login
router.post("/login", userController.loginUser);
module.exports = router;
