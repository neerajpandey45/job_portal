import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { getRelativeTime } from "@/utils/jobdateFormat";
const JobList = ({job}) => {
  const router=useRouter();
  return (
      <div className="p-3 border rounded  hover:shadow-2xl transition ease-in-out duration-300 cursor-pointer" onClick={()=>router.push(`/userHomepage/${job._id}`)}>
        <h3>{job.title}</h3>
        <h6>{job.companyName}</h6>
       <div className="flex gap-2">
        <i className="bi bi-geo-alt"></i>
         <p >{job.location}</p>
       </div>
       <div className="flex gap-2">
        <i className="bi bi-bag-dash"></i>
         <p>{job.experience}</p>
       </div>
       <div className="flex gap-2">
        <i className="bi bi-briefcase"></i>
        <p>{job.jobType}</p>
       </div>
        <p >{job.description.slice(0, 80)}...</p>
        <p>{getRelativeTime(job.createdAt)}</p>
      </div>
  );
};

export default JobList;
