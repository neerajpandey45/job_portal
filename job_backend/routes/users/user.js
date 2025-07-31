// routes/user.js
const User = require("../../models/users/user");
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users/userControllers");
const authenticateToken = require("../../middlewares/authUsers");
const authorizeRoles=require("../../middlewares/roleBase");
router.get("/check", authenticateToken,authorizeRoles("user"), (req, res) => {
   console.log("✅ Auth route success for userId:", req.userId);
  res.json({ authenticated: true, userId: req.user });
});
// // GET /api/users
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
router.get("/fullDetails",authenticateToken,userController.UserFullDeatils);
//  router.post("/education",authenticateToken,userController.updateEducation); 
 router.put("/add/education",authenticateToken,userController.updateEducation);
router.post("/logout",userController.logoutUser);
router.put("/add/summary",authenticateToken ,userController.addSummary);
router.put("/add/skills",authenticateToken,userController.addSkills);

module.exports = router;
