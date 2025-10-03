"use client";
import axiosInstance from "@/services/axiosInstance";
import React, { useState, useEffect } from "react";
import ResumeSidebar from "./sidebar";
import Image from "next/image";
const ResumePage = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axiosInstance.get("/users/FullDetails");
        // console.log("user data ",res.data)
        setProfile(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchDetails();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-10 bg-gray-300 py-10 mx-auto">
        <ResumeSidebar />
        <div className="w-full flex flex-col">
        <div
        className="bg-white shadow border rounded-md py-5 mx-auto
               w-full max-w-[794px] min-h-[1123px] md:h-[1123px]"
        >
          <div className="flex justify-center">
            <Image
              src={
                profile.profileImage
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}${profile.profileImage}`
                  : "/default-profile.png"
              }
              alt="profile"
              width={50}
              height={50}
              style={{ objectFit: "fill", borderRadius: "50%" }}
            />
          </div>
          <div className="flex flex-col justify-center items-center border-b">
            <h6>
              {profile.firstName} {profile.lastName}
            </h6>
            <p>{profile.email}</p>
          </div>
          <div className="px-10 border-b">
            <h5>Profile</h5>
            <p>{profile.summary?.replace(/'/g, "&apos;")}</p>
          </div>
          <div className="px-10 border-b">
            {profile.education?.map((edu) => (
              <div key={edu._id}>
                <h5>Education</h5>
                <p className="mb-0">{edu.degree}</p>
                <p>{edu.institution}</p>
              </div>
            ))}
          </div>
          <h5 className="px-10">Skills</h5>
          <div className="flex flex-wrap gap-3 px-10 mx-auto pb-4 border-b">
            {profile.skills?.map((skill) => (
              <div key={skill} className="border rounded-3 px-2 py-1 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
       <div className="w-full flex justify-center mt-2">
          <button className="btn btn-primary">Download</button>
        </div>
        </div>
      </div>
       
    </>
  );
};

export default ResumePage;
