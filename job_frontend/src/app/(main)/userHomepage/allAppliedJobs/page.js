"use client";
import React, { useEffect, useState } from "react";
import JobList from "../jobCard/jobCard";
import axiosInstance from "@/services/axiosInstance";
const UserAppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const items = ["Applied Job", "Recommended Job", "Profile Job"];
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axiosInstance.get("/applied-jobs/appliedAlljobs", {});
        setAppliedJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch applied jobs", err);
      }
    };
    fetchAppliedJobs();
  }, []);

  if (appliedJobs.length === 0)
    return (
      <p className="text-center mt-4">You haven&apos;applied to any jobs yet.</p>
    );
  return (
    <div className="container mt-4">
      <ul
        className="flex md:hidden gap-2 w-full overflow-x-auto whitespace-nowrap list-unstyled"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`border p-1 px-1 rounded-3 cursor-pointer transition-colors duration-300 ${
              activeIndex === index ? "bg-amber-400" : "bg-blue-300"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <h4 className="mb-3">Your Applied Jobs:{appliedJobs.length}</h4>
      <div className="row flex justify-center">
        {appliedJobs.map((application) => (
          <div key={application._id} className="col-11 col-md-7 mb-4">
            <JobList job={application.jobId || application.jobSnapshot} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAppliedJobs;
