const express=require("express");
const router=express.Router();
const Recruiter=require("../../controllers/Admin/adminControllers");
const Users=require("../../controllers/Admin/adminControllers");
router.get("/allRecruiters",Recruiter.getAllrecruiter);
router.get("/allUsers",Users.getAllUsers);
module.exports = router;