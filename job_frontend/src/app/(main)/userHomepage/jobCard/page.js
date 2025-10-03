"use client";
import React, { useEffect, useState } from "react";
import JobList from "./jobCard";
import axiosInstance from "@/services/axiosInstance";
const JobCard = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    const fetchAlljobs = async () => {
      try {
        const res = await axiosInstance.get("/alljobs/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchAlljobs();
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-center mt-1">
        <h5 className=" bg-blue-600 py-2 p-3 text-white rounded-5">
          {jobs && `Total results ${jobs.length}`}
        </h5>
      </div>
      <div className="container">
        <div className="row flex justify-center py-2">
          {jobs?.map((job)=>(
            <div key={job._id} className="col-12 col-md-7 mb-4">
              <JobList job={job}/>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default JobCard;
