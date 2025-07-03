"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs/recruiterjobs",{
          withCredentials:true,
        });
        setJobs(res.data.jobs)
      } catch (err) {
        console.log("something went wrong",err)
      }
    };
     fetchJobs();
  },[]);

  return (
    <div>
      {jobs.map((job)=>(
        <div key={job._id}>
          <p>{job.title}</p>
        </div>
      ))}
    </div>
  )
};

export default JobCard;
