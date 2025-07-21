"use client";
import { useState } from "react";
import axiosInstance from "@/services/axiosInstance";
const ProfileImageUploader = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };
  const handleUpload = async () => {
    if (!file) return alert("Select an image");

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axiosInstance.post("/uploads/upload", formData, {
        // withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Uploaded!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && <img src={preview} alt="Preview" width="100" />}
      <button onClick={handleUpload}>Upload</button>
    </div>
   
  );
};

export default ProfileImageUploader;
