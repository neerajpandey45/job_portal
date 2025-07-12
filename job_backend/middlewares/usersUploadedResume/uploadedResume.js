const multer = require("multer");
const path = require("path");
const fs = require("fs");
// ✅ Create full path to resumes folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"middlewares/usersUploadedResume/resumes");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
