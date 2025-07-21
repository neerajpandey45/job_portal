const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
router.get("/download", (req, res) => {
  const filePath = req.query.path;
  if (!filePath) {
    return res.status(400).json({ error: "File path is required" });
  }
  const fileName = path.basename(filePath);

  // ✅ Use project root
  const absolutePath = path.join(
    process.cwd(),
    "middlewares",
    "uploads",
    "resumes",
    fileName
  );

  console.log("Resolved absolute path:", absolutePath);

  if (fs.existsSync(absolutePath)) {
    res.download(absolutePath, fileName, (err) => {
      if (err) {
        console.error("Download error:", err);
        res.status(500).send("Error downloading the file");
      }
    });
  } else {
    console.log("File not found at:", absolutePath);
    res.status(404).send("File not found");
  }
});

module.exports = router;
