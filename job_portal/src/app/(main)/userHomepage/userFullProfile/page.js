"use client";
import axiosInstance from "@/services/axiosInstance";
import React, { useEffect, useState } from "react";
const FullDeatails = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchFullDeatails = async () => {
      try {
        const res = await axiosInstance.get("/users/fullDetails");
        setProfile(res.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchFullDeatails();
  }, []);
  return (
    <>
      <div className="row p-4 gap-3 justify-center">
        <div className="flex justify-center">Profile image</div>
        <div className="col-12 col-md-6 shadow bg-blue-300">
          <p className="text-center">
            {profile.firstName} {profile.lastName}
          </p>
        </div>
        <div className="col-12 col-md-6">
          <p>{profile.email}</p>
        </div>
        {/* <div>
          <p>Resume</p>
        </div> */}
        <div className="bg-gray-800 col-12 col-md-6 text-white rounded-2 p-2">
          <div className="flex justify-between">
            <h3 className="font-bold">Education</h3>
            <i className="bi bi-pencil"></i>
          </div>
          <div>
            {profile.education?.map((edu, index) => (
              <div key={edu._id || index}>
                <p>
                  {edu.degree} from {edu.institution}
                </p>
              </div>
            )) || <p>No education added</p>}
          </div>
        </div>
        <div className="col-12 col-md-6 bg-gray-800 text-white rounded-2 p-2">
          <div className="flex justify-between">
            <h6>Summary</h6>
            <i className="bi bi-pencil-fill"></i>
          </div>
          <p>{profile.summary}</p>
        </div>
        <div className="col-12 col-md-6 bg-gray-800 text-white p-2 rounded-2">
          <h6>skills</h6>
          <div className="flex flex-wrap gap-2">
            {profile.skills?.map((skill, idx) => (
              <div key={idx}
               className="border  border-white py-1 px-2 rounded text-sm bg-gray-700">
                {skill}
              </div>
            ))}
          </div>          
        </div>
      </div>
    </>
  );
};

export default FullDeatails;
