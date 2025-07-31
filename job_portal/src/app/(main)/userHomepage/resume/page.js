"use client";
import axiosInstance from "@/services/axiosInstance";
import React, { useState, useEffect } from "react";
const ResumePage = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axiosInstance.get("/users/FullDetails");
        setProfile(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchDetails();
  }, []);
  return (
     <div className="w-full flex justify-center bg-gray-100 py-10">
      <div
        className="bg-white shadow border rounded-md py-5"
        style={{ width: "794px", height: "1123px" }} // A4 size in px
      >
          <div className="flex justify-center">
          <img
            src={`http://192.168.30.43:5000${profile.profileImage}`}
            alt="profile"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "fill",
              borderRadius: "50%",
            }}
          
          />
        </div>
       <div className="flex flex-col justify-center items-center border-b">
        <h6 >{profile.firstName} {profile.lastName}</h6>
        <p>{profile.email}</p>
       </div>
       <div className="px-10 border-b">
        <h5>Profile</h5>
        <p>{profile.summary}</p>
       </div>
       <div className="px-10 border-b">
        {profile.education?.map((edu)=>(
          <div key={edu._id}>
            <h5>Education</h5>
            <p className="mb-0">{edu.degree}</p>
            <p>{edu.institution}</p>
          </div>
        ))}
       </div>
        <h5 className="px-10">Skills</h5>
       <div className="flex flex-wrap gap-3 px-10 mx-auto pb-4 border-b">
        {profile.skills?.map((skill)=>(
          <div key={skill} className="border rounded-3 px-2 py-1 text-sm">
            {skill}
         </div>
          
        ))}
       </div>
      </div>
    </div>
  );
};

export default ResumePage;
