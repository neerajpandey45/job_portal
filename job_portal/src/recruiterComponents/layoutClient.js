"use client";
import React, { useState } from "react";
import RecruiterNavbar from "./navbar/recruiterNavabar";
import RecruiterSidebar from "./sidebar/sidebar";
const RlayoutClient = ({ children }) => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSide(!isOpenSide);
  };
  return (
    <div className="flex flex-col h-screen overflow-x-auto">
      <RecruiterNavbar onToggleSidebar={toggleSidebar} />
      <div className="flex flex-grow overflow-y-auto">
        <div className="hidden md:block">
          <RecruiterSidebar />
        </div>
        {isOpenSide && (
          <div className="fixed top-0 left-0 h-screen w-[60%]">
            <RecruiterSidebar setOpenSide={setIsOpenSide} />
          </div>
        )}
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
export default RlayoutClient;
