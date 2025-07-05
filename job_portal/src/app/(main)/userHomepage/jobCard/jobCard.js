import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
const JobList = ({job}) => {
  const router=useRouter();
  return (
      <div className="p-3 border rounded shadow transition cursor-pointer" onClick={()=>router.push(`/userHomepage/${job._id}`)}>
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
      </div>
    // <div onClick={onClick} className=" p-2 px-4 rounded-4 shadow min-h-[30vh] transition-all duration-300 mt-2justify-center">
    //   <div className="w-[80%]">
    //     <p>{position}</p>
    //   </div>
    //   <div className="flex gap-1">
    //     <i className="bi bi-geo-alt"></i>
    //     <p>{name}</p>
    //   </div>
    //   <div className="flex gap-1">
    //     <i className="bi bi-bag-dash"></i>
    //     <p> {experience}</p>
    //   </div>
    //   <div>
    //     <p>{description}</p>
    //   </div>
    // </div>
    //{ name, experience, position, description,onClick }
  );
};

export default JobList;
