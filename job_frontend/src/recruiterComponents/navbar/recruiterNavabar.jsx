"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const RecruiterNavbar = ({onToggleSidebar}) => {
  const router = useRouter();
  return (
    <div>
      <nav className="flex flex-wrap  list-unstyled justify-between p-2 bg-gray-800 text-white px-4">
        <div className="md:hidden sm:block">
          <i className="bi bi-list" onClick={onToggleSidebar}></i>
        </div>
        <li className="hidden md:block">Home</li>
        <button className="btn btn-danger border rounded-5" onClick={() => router.push("/recruiterHomepage/profile")}>Profile</button>
      </nav>
    </div>
  );
};

export default RecruiterNavbar;
