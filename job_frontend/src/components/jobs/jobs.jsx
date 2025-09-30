import React from "react";
import Link from "next/link";
const Jobs = ({ isOpen, onToggle }) => {
  return (
    <div className="relative" >
      <span onClick={onToggle} className="cursor-pointer">
        Jobs
      </span>
      {isOpen && (
        <ul className="absolute top-12  bg-white text-black shadow w-[20vw] px-5 z-50 flex flex-col space-y-2 py-3 mb-2 ">
          <li>
            <Link href="/userHomepage/jobCard">Recommended jobs</Link>
          </li>
          <Link href="/userHomepage/allAppliedJobs">
            <li>Apllied jobs</li>
          </Link>
          <li>Recently</li>
          <li>Recommended</li>
        </ul>
      )}
    </div>
  );
};

export default Jobs;
