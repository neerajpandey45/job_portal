"use client";
import axiosInstance from "@/services/axiosInstance";
import CustomModal from "@/utils/customModel/customModel";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EducationSection from "../fake/page";
const EditProfile = ({ action, profile, onclose,  editIndex, updateProfile }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({});
  if (!action || !profile) return null;
  useEffect(() => {
    if (action === "profile") {
      setFormData({ summary: profile.summary });
    }
    if (action === "skills") {
      setFormData({
        skills: profile.skills?.join(", ") || "",
      });
    }
    if (action === "image") {
      setFormData({
        image: profile.image || "",
      });
    }
    if (action === "education") {
      const targetEdu = profile.education?.[editIndex] || {}; // could be empty for new
  setFormData({
    degree: targetEdu.degree || "",
    institution: targetEdu.institution || "",
    startYear: targetEdu.startYear || "",
    endYear: targetEdu.endYear || "",
    score: targetEdu.score || ""
  });
    }
  }, [action, profile]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const editSection = () => {
    if (action === "image") {
      return (
        <div className="space-y-3">
          <input
            type="file"
            accept="image/*"
            className="border rounded-3 py-2 w-full px-2"
            onChange={(e) => {
              const selected = e.target.files[0];
              if (selected && selected.size > 1 * 1024 * 1024) {
                alert("Image must be less than 2MB");
                return;
              }
              setFile(selected);
              setPreview(URL.createObjectURL(selected));
            }}
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
          )}
        </div>
      );
    }
    if (action === "profile") {
      return (
        <input
          type="text"
          name="summary"
          placeholder="enter profile details"
          value={formData.summary || ""}
          onChange={handleChange}
          className="w-full border rounded-2 text-sm font-medium py-1"
        />
      );
    }
    if (action === "education") {
      return (
        <>
          <EducationSection formData={formData} handleChange={handleChange} />
        </>
      );
    }
    if (action === "skills") {
      return (
        <input
          type="text"
          name="skills"
          placeholder="enter skills"
          className="w-full border rounded text-sm font-medium py-1"
          value={formData.skills || ""}
          onChange={handleChange}
        />
      );
    }
    if (action === "projects") {
      return (
        <div className="space-y-3">
          <div className="space-y-2">
            <label>Title</label>
            <input
              type="text"
              placeholder="enter projects title"
              className="w-full border"
            />
          </div>
          <div className="space-y-2">
            <label>Summary</label>
            <input
              type="text"
              placeholder="enter project summary"
              className="w-full border"
            />
          </div>
          <div className="space-y-2">
            <label>project link</label>
            <input
              type="url"
              placeholder="enter link"
              className="w-full border"
            />
          </div>
        </div>
      );
    }
  };
  const handleSave = async () => {
    try {
      let updatedData = {};
      if (formData.summary && action === "profile") {
        updatedData = { summary: formData.summary };
        await axiosInstance.put("/users/add/summary", updatedData);
      }
      if (
      formData.degree &&
      formData.institution &&
      formData.startYear &&
      formData.endYear &&
      formData.score &&
      action === "education"
    ) {
      // Step 1: Fetch current education
      const res = await axiosInstance.get("/users/fullDetails");
      const currentEdu = res.data.education || [];
      const newEntry = {
        degree: formData.degree,
        institution: formData.institution,
        startYear: formData.startYear,
        endYear: formData.endYear,
        score: formData.score,
      };
      const searchParams = new URLSearchParams(window.location.search);
      const index = searchParams.get("index");
      if (index !== null && !isNaN(index)) {
        // Edit mode
        currentEdu[index] = newEntry;
      } else {
        // Add mode
        currentEdu.push(newEntry);
      }
      updatedData = { education: currentEdu };
      await axiosInstance.put("/users/add/education", updatedData);
    }
      if (formData.skills && action === "skills") {
        updatedData = {
          skills: formData.skills
            .split(",")
            .map((skill) => skill.trim()) // Convert comma string to array
            .filter((skill) => skill), // Remove empty strings
        };
        await axiosInstance.put("/users/add/skills", updatedData);
      }
      // Update the profile in the parent component (to reflect changes immediately)
      updateProfile(updatedData);
      toast.success("Updated successfully!");
      onclose(); // Close the modal after saving
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to update profile");
    }
    let updatedData = {};

    if (action === "image" && file) {
      if (!file) return alert("Select an image");
      const formData = new FormData();
      formData.append("profileImage", file);
      const res = await axiosInstance.post("/uploads/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      updatedData = {
        profileImage: res.data.profileImage,
      };
    }
  };
  return (
    <div>
      <CustomModal
        items={`Edit ${action}`}
        onClose={onclose}
        onSave={handleSave}
      >
        {editSection()}
      </CustomModal>
    </div>
  );
};

export default EditProfile;
