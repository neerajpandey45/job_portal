const express=require("express");
const router=express.Router();
const Recruiter=require("../../controllers/Admin/adminControllers");
const Users=require("../../controllers/Admin/adminControllers");
const authenticateToken=require("../../middlewares/authUsers");
const authorizeRoles=require("../../middlewares/roleBase");
router.get("/allRecruiters",Recruiter.getAllrecruiter);
router.get("/allUsers",Users.getAllUsers);
router.get("/admin", authenticateToken, authorizeRoles("admin"), (req, res) => {
  res.json({ msg: "Welcome Admin" });
});
router.get("/user", authenticateToken, authorizeRoles("user"), (req, res) => {
  res.json({ msg: "Welcome user" });
});
module.exports = router;