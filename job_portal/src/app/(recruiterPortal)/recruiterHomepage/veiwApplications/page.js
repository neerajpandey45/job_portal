"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const VeiwApplications = () => {
  const router=useRouter();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/jobs/recruiterjobs",
          {
            withCredentials: true,
          }
        );
        setJobs(res.data.jobs);
      } catch (err) {
        console.log("something went wrong", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="w-full h-[90vh] overflow-y-scroll  py-2 p-2" style={{scrollbarWidth:"none"}}>
      <div className="bg-gray-700 text-white w-max px-3 ">
        <h5>Total Jobs:</h5>
        <p className="text-center">{jobs.length}</p>
      </div>
      {jobs.map((job) => (
        <div key={job._id} className="mb-2 p-3 border rounded bg-light">
          <h6>{job.title}</h6>
          <div>
            <li>{job.jobType}</li>
            <li>{job.location}</li>
            <li>{job.experience}</li>
            <li>{job.description}</li>
            {/* <li>{job.fullDescriptions}</li> */}
           <div className="w-full flex justify-end">
              <button className="btn btn-primary px-3" onClick={()=>router.push(`/recruiterHomepage/${job._id}`)} >veiw</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default VeiwApplications;
