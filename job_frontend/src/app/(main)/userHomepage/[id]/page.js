"use client";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "next/navigation";
import { getRelativeTime } from "@/utils/jobdateFormat";
import AppliedJob from "../appliedjob/page";
import axiosInstance from "@/services/axiosInstance";
const JobDetailsPage = () => {
  const { id } = useParams(); // dynamic ID from URL
  const [job, setJob] = useState(null);
    const [showApplyForm, setShowApplyForm] = useState(false);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axiosInstance.get(`/alljobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Error fetching job:", err);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) return <p className="text-center mt-5">Loading job details...</p>;
  return (
    <>
      <div className="container">
        <div className="row justify-center ">
          <div className="col-10 shadow mt-2 rounded-3 p-3 mb-4 ">
            <h3>{job.title}</h3>
            <h6>{job.companyName}</h6>
            <div className="flex gap-2">
              <i className="bi bi-geo-alt"></i>
              <p>{job.location}</p>
            </div>
            <div className="flex gap-2">
              <i className="bi bi-bag-dash"></i>
              <p>{job.experience}</p>
            </div>
            <div className="flex gap-2">
              <i className="bi bi-briefcase"></i>
              <p>{job.jobType}</p>
            </div>
            <div className="flex gap-2">
              <i className="bi bi-clock"></i>
               <p>{getRelativeTime(job.createdAt)}</p>
            </div>
             <div className="w-full flex justify-end">
            <button className="btn btn-primary w-[90px]" onClick={()=>setShowApplyForm(true)}>Apply</button>
          </div>
            {showApplyForm && (
              <AppliedJob onClose={()=>setShowApplyForm(false)}/>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="shadow  bg-white col-10 rounded-3">
              <p className="whitespace-pre-line p-2">{job.fullDescriptions}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
