import axiosInstance from "@/services/axiosInstance";
import CustomModal from "@/utils/customModel/customModel";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const EditProfile = ({ action, profile, onclose, updateProfile }) => {
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
    if (action === "education") {
      const firstEducation = profile.education?.[0] || {};
      setFormData({
        degree: firstEducation.degree || "",
        institution: firstEducation.institution || "",
        startYear: firstEducation.startYear || "",
        endYear: firstEducation.endYear || "",
      });
    }
  }, [action, profile]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const editSection = () => {
    if (action === "profile") {
      return (
        <input
          type="text"
          name="summary"
          placeholder="enter profile details"
          value={formData.summary || ""}
          onChange={handleChange}
          className="w-full border rounded-2"
        />
      );
    }
    if (action === "education") {
      return (
        <>
          <input
            type="text"
            name="degree"
            value={formData.degree || ""}
            onChange={handleChange}
            placeholder="Enter degree"
            className="w-full border rounded-2 mb-2"
          />
          <input
            type="text"
            name="institution"
            value={formData.institution || ""}
            onChange={handleChange}
            placeholder="Enter institution"
            className="w-full border rounded-2"
          />
        </>
      );
    }
    if (action === "skills") {
      return (
        <input
          type="text"
          name="skills"
          placeholder="enter skills"
          className="w-full border rounded"
          value={formData.skills || ""}
          onChange={handleChange}
        />
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
      if (formData.degree && formData.institution && action === "education") {
        updatedData = {
          education: [
            {
              degree: formData.degree,
              institution: formData.institution,
              startYear: formData.startYear,
              endYear: formData.endYear,
            },
          ],
        };
        await axiosInstance.put("/users/add/education", updatedData);
      }
   if (formData.skills && action === "skills") {
  updatedData = {
    skills: formData.skills
      .split(",")
      .map((skill) => skill.trim()) // Convert comma string to array
      .filter((skill) => skill)     // Remove empty strings
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
  };
  //   console.log(formData);

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
