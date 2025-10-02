const fs = require("fs");
const path = require("path");
const User = require("../../models/users/user");

exports.uploadProfileImage = async (req, res) => {
  try {
    
    const userId = req.userId;
    const fileName = req.file.filename;
         if (!req.fileName) {
      console.log("No file received");
      return res.status(400).json({ error: "No file uploaded" });
    }
    // const imagePath = `/middlewares/uploads/profileImages/${fileName}`;
    const imagePath = `/profileImages/${fileName}`;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // ✅ Clean the path (remove leading slash)
    if (user.profileImage) {
      const oldImageRelativePath = user.profileImage.startsWith("/")
        ? user.profileImage.slice(1)
        : user.profileImage;

      const oldImagePath = path.join(__dirname, "..", "..", oldImageRelativePath);

      console.log("Trying to delete:", oldImagePath);

      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
        console.log("Old image deleted");
      } else {
        console.log("Old image not found");
      }
    }

    user.profileImage = imagePath;
    await user.save();

    res.status(200).json({
      message: "Profile image uploaded successfully",
      image: user.profileImage,
    });
  } catch (err) {
    console.error("Image upload error:", err);
    res.status(500).json({ error: "Image upload failed" });
  }
};
