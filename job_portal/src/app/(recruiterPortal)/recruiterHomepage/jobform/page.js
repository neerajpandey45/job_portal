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
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <h3 className="text-center py-2">Upload jobs form</h3>
          <form className="bg-white shadow mt-[5%]" onSubmit={handleSubmit}>
            <div className="row mb-2">
              <div className="col-6 space-y-2 px-5">
                <label htmlFor="">job title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="enter job title"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
              <div className="col-6 space-y-2 px-5">
                <label htmlFor="">companyName</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="company name"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 px-5">
                <label htmlFor="">job location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="enter job location"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
              <div className="col-6 px-5">
                <label>Stipend</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="stipend"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 px-5">
                <label htmlFor="">experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="enter require experience"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
              <div className="col-6 px-5">
                <label>jobType</label>
                <input
                  type="text"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  placeholder="enter job type"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6 px-5">
                <label htmlFor="">skills</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="require skills"
                  className="w-full border border-black rounded-3 ps-1"
                ></textarea>
              </div>
               <div className="col-6 px-5">
                <label htmlFor="">descriptions</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="descriptions"
                  className="w-full border border-black rounded-3 ps-1"
                ></textarea>
              </div>
            </div>
             <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">full Descriptions</label>
                <textarea
                  name="fullDescriptions"
                  value={formData.fullDescriptions}
                  onChange={handleChange}
                  placeholder="full descriptions"
                  className="w-full border border-black rounded-3 ps-1"
                    style={{height:"auto"}}
                ></textarea>
              </div>
               </div>
            <div className="w-full flex justify-center">
              <button className="btn btn-primary mb-2">post job</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobform;
