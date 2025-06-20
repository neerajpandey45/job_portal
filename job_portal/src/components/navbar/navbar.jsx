"use client";

import React from "react";
import { useRouter } from 'next/navigation'
const Navabar = () => {
  const router=useRouter()

  const handleSearch=()=>{
    router.push('/searchJobs')
  }
  return (
    <div className="bg-dark text-white p-3 flex justify-between items-center whitespace-nowrap w-max  min-w-full gap-3 py-2">
      <div><h4>
        Home</h4></div>
      <ul className="flex items-center list-none m-0 p-0 gap-5">
        <li>Jobs</li>
        <li>Companies</li>
        <li>Services</li>
      </ul>
      <div className="relative">
        <input type="text" placeholder="search job here " className="w-full border rounded-3 outline-none text-center py-1" onClick={handleSearch} />
        <i className="bi bi-search right-2 position-absolute top-1/2 transform -translate-y-1/2"></i>
      </div>
      <div className="flex gap-3">
        <div>
          <i className="bi bi-bell"></i>
        </div>
        <div className="flex gap-2 border rounded-5 py-1 px-3">
          <i className="bi bi-list"></i>
          <div>
            <i className="bi bi-person"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
