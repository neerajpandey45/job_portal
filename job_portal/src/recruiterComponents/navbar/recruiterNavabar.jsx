"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const RecruiterNavbar = () => {
    const router=useRouter();
  return (
    <div>
      <nav className="flex flex-wrap  list-unstyled justify-between p-2 bg-gray-800 text-white px-4">
          <li>Home</li>
        <button className=" btn btn-danger border rounded-5" onClick={()=>router.push("/recruiterHomepage/jobform")}>Upoad job</button>
      </nav>
    </div>
  );
};

export default RecruiterNavbar;
