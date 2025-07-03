"use client";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
const Jobform = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    experience: "",
    skills: "",
    description: "",
    jobType: "Remote",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs/jobpost", formData, {
        withCredentials: true,
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
    <div className="container-fluid h-screen">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4 col-sm-6">
          <h3 className="text-center py-2">Upload jobs form</h3>
          <form className="bg-white shadow mt-[5%]" onSubmit={handleSubmit}>
            <div className="row mb-2">
              <div className="col-12 space-y-2 px-5">
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
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
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
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
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
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">required skills</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full border border-black rounded-3 ps-1"
                ></textarea>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">job descriptions</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-black rounded-3 ps-1"
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
