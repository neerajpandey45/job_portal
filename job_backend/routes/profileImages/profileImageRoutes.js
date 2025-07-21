const express = require("express");
const router = express.Router();
const authenticateUser = require("../../middlewares/authUsers");
const upload = require("../../middlewares/uploads/profileImages");
const { uploadProfileImage } = require("../../controllers/userImage/imageControllers");

router.post("/upload", authenticateUser, upload.single("profileImage"), uploadProfileImage);

module.exports = router;
