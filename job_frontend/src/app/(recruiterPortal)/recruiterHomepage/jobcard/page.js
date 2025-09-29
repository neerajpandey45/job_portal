"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axiosInstance from "@/services/axiosInstance";
const JobCard = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axiosInstance.get("/jobs/recruiterjobs"
        );
        setJobs(res.data.jobs);
      } catch (err) {
        console.log("something went wrong", err);
      }
    };
    fetchJobs();
  }, []);
  console.log(jobs);

  // ✅ Delete han
  // dler
  const handleDelete = async (jobId) => {
    try {
      const res = await axiosInstance.delete(
        `/recruiter/delete/${jobId}`
        // { withCredentials: true }
      );
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      toast.success("Deleted successfully");
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <div
      className="w-full h-[90vh] overflow-y-scroll  py-2 p-2"
      style={{ scrollbarWidth: "none" }}
    >
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
              <button
                className="btn btn-primary px-3"
                onClick={() => handleDelete(job._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
