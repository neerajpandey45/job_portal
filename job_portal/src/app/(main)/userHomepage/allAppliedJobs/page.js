"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobList from "../jobCard/jobCard";
const UserAppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

   useEffect(() => {
     const fetchAppliedJobs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/applied-jobs/appliedAlljobs",
        { withCredentials: true }
      );
      setAppliedJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch applied jobs", err);
    } 
  };
    fetchAppliedJobs();
  }, []);
  if (appliedJobs.length === 0)
    return <p className="text-center mt-4">You haven't applied to any jobs yet.</p>;
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Your Applied Jobs</h4>
      <div className="row flex justify-center">
        {appliedJobs.map((application) => (
          <div key={application._id} className="col-7 mb-4">
            <JobList job={application.jobId}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAppliedJobs;
