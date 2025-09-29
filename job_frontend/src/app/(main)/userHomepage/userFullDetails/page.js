"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axiosInstance from "@/services/axiosInstance";
import EditProfile from "./edit";
import { formatDate } from "@/utils/formValidation.js/formValidation";
const ModalPage = () => {
  const [profile, setProfile] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const action = searchParams.get("action");
  const editIndex = searchParams.get("index");
  const closeModal = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.delete("action");
    current.delete("index");
    router.replace(`/userHomepage/userFullDetails${current.toString()}`),
      { scroll: false };
  };
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
    <div className="w-full flex justify-center p-4 relative">
      <div className="space-y-5 row col-12 col-md-6">
        {/* <p>{profile.profileImage}</p> */}
        <div className="flex justify-center">
          <img
            src={`http://192.168.142.43:5000${profile.profileImage}`}
            alt="profile"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "fill",
              borderRadius: "50%",
            }}
          />
          <a className="mt-30" href="?action=image">
            edit
          </a>
        </div>
        <div className="border p-3 rounded">
          <div className="flex justify-between items-center ">
            <h6>Basic Details</h6>
            <button
              onClick={() =>
                router.push("?action=basic-details", { scroll: false })
              }
            >
              Edit
            </button>
          </div>
          <div className="flex justify-between ">
            <span>
              {profile.firstName} {profile.lastName}
            </span>
            <span>{profile.email}</span>
          </div>
        </div>
        <div className="border p-3 rounded">
          <div className="flex justify-between items-center ">
            <h6>Profile Summary</h6>
            <button
              onClick={() => router.push("?action=profile", { scroll: false })}
            >
              Edit
            </button>
          </div>
          <p>{profile.summary}</p>
        </div>
        <div className=" border p-3 rounded">
          <div className="flex justify-between items-center">
            <h6>Education</h6>
            <button
              onClick={() =>
                router.push(`?action=education`, { scroll: false })
              }
            >
              Add Education
            </button>
          </div>
          <div>
            {profile.education?.length > 0 ? (
              profile.education.map((edu, index) => (
                <div key={edu._id || index} className="border rounded-md mb-3 p-2">
                  <div className="flex gap-4">
                    {edu.degree}
                    <i
                      className=" bi bi-pencil"
                      onClick={() =>
                        router.push(`?action=education&index=${index}`, {
                          scroll: false,
                        })
                      }
                    ></i>
                  </div>
                  <span>{edu.institution}</span>
                  <p>
                    {formatDate(edu.startYear)} to {formatDate(edu.endYear)}
                  </p>
                  <p>Score: {edu.score}</p>
                <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              ))
            ) : (
              <p>No education added</p>
            )}
          </div>
        </div>
        <div className="border p-3 rounded">
          <div className="flex justify-between items-center ">
            <h6>Skills</h6>
            <button
              onClick={() => router.push("?action=skills", { scroll: false })}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills?.map((skill, index) => (
              <div
                key={index}
                className="border text-light border-white py-1 px-2 rounded text-sm bg-gray-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border p-3 rounded">
          <h6>Projects</h6>
          <a href="?action=projects">Edit</a>
        </div>
        <div className="flex justify-between items-center border p-3 rounded">
          <h6>Experience</h6>
          <a href="?action=experience">Edit</a>
        </div>
        <div className="flex justify-between items-center border p-3 rounded">
          <h6>Certificate</h6>
          <a href="?action=certificate">Edit</a>
        </div>
        <div className="flex justify-between items-center border p-3 rounded">
          <h6>fake</h6>
          <a href="?action=fake">ADD</a>
        </div>
      </div>
      {action && (
        <EditProfile
          action={action}
          profile={profile}
          editIndex={editIndex}
          onclose={closeModal}
          updateProfile={(fields) =>
            setProfile((prev) => ({ ...prev, ...fields }))
          }
        />
      )}
    </div>
  );
};

export default ModalPage;
