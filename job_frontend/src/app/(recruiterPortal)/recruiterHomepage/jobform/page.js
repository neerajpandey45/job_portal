"use client";
// import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import axiosInstance from "@/services/axiosInstance";
const Jobform = () => {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    jobType: "",
    location: "",
    experience: "",
    salary: "",
    skills: "",
    description: "",
    fullDescriptions: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/jobs/jobpost", formData, {
        // withCredentials: true,
      });
      toast.success("successfully posted");
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("You already posted this job at this location.");
      } else {
        toast.error("Something went wrong while posting.");
      }
      console.error("Error posting job:", err);
    }
  };
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-5xl">
        <h3 className="text-center py-4 text-lg md:text-xl font-semibold">
          Upload Jobs Form
        </h3>
        <form
          className="bg-white shadow rounded-md p-3 space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Title + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter job title"
                className="w-full border border-gray-400 rounded-md px-2 h-9"
              />
            </div>
            <div className="flex flex-col">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full border border-gray-400 rounded-md px-2 h-9"
              />
            </div>
          </div>

          {/* Location + Stipend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Job Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter job location"
                className="w-full border border-gray-400 rounded-md px-2 h-9"
              />
            </div>
            <div className="flex flex-col">
              <label>Stipend</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Stipend"
                className="w-full border border-gray-400 rounded-md px-2 h-9"
              />
            </div>
          </div>

          {/* Experience + Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Experience</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Required experience"
                className="w-full border border-gray-400 rounded-md px-2 h-9"
              />
            </div>
            <div className="flex flex-col">
              <label>Job Type</label>
              <input
                type="text"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                placeholder="Enter job type"
                className="w-full border border-gray-400 rounded-md px-2 h-9"
              />
            </div>
          </div>

          {/* Skills + Short Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Skills</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Required skills"
                className="w-full border border-gray-400 rounded-md px-2 py-1"
                rows={3}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Short Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Job description"
                className="w-full border border-gray-400 rounded-md px-2 py-1 resize-none overflow-hidden"
                rows={3}
              ></textarea>
            </div>
          </div>

          {/* Full Description */}
          <div className="flex flex-col">
            <label>Full Description</label>
            <textarea
              name="fullDescriptions"
              value={formData.fullDescriptions}
              onChange={handleChange}
              placeholder="Full job description"
              className="w-full border border-gray-400 rounded-md px-2 py-1"
              rows={5}
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jobform;
