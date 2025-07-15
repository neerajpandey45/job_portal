"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Jobs from "../jobs/jobs";
import Companies from "../companies/companies";
import Services from "../services/services";
import UserProfile from "@/app/(main)/userHomepage/profile/page";
const Navabar = ({onToggleSidebar}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const router = useRouter();
  const handleSearch = () => {
    router.push("/userHomepage/search");
  }
  const ref = useRef();
  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenMenu("");
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
 const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-3 flex justify-between items-center w-max min-w-full gap-3 py-2 cursor-pointer">
      <div className="flex">
        <i className="bi bi-list md:hidden" onClick={onToggleSidebar}></i>
        <h4 className="hidden md:block">Home</h4>
      </div>
      <div className="hidden lg:flex gap-5 items-center" ref={ref}>
        <Jobs
          isOpen={openMenu === "jobs"}
          onToggle={() => setOpenMenu(openMenu === "jobs" ? "" : "jobs")}
        />
        <Companies
          isOpen={openMenu === "companies"}
          onToggle={() =>
            setOpenMenu(openMenu === "companies" ? "" : "companies")
          }
        />
        <Services />
      </div>
      <div className="relative ">
        <input
          type="text"
          placeholder="search job here "
          className="w-full border rounded-3 outline-none text-center py-1"
          onClick={handleSearch}
        />
        <i className="bi bi-search right-2 position-absolute top-1/2 transform -translate-y-1/2 "></i>
      </div>
      <div className="flex gap-3">
        <div>
          <i className="bi bi-bell"></i>
        </div>
        <div className="hidden md:flex gap-2 border rounded-5 py-1 px-3 ">
          <i className="bi bi-list"></i>
          <div>
            <i className="bi bi-person"  onClick={toggleProfile} ></i>
          </div>
          <UserProfile isOpen={isProfileOpen} toggleProfile={toggleProfile}/>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
