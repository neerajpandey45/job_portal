"use client";
import React, { useState } from "react";
import Link from "next/link";
const Sidebar = ({ setOpenSide }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-[20vw] min-h-[100vh] shadow p-3 ">
        <div className="w-full flex gap-4 h-[10vh]">
          <i className="bi bi-person-circle"></i>
          <h5>Profile</h5>
          <div className="md:hidden flex justify-end w-full text-danger">
            <i
              className="bi bi-x-circle-fill"
              onClick={() => setOpenSide(false)}
            ></i>
          </div>
        </div>
        <div>
          <ul className="text-break list-none m-0 p-0 space-y-5">
            <li>
              <Link
                href="/userHomepage/search"
                className="flex gap-3 text-decoration-none text-reset"
              >
                <i className="bi bi-search"></i>
                Search jobs
              </Link>
            </li>
            <li className="flex gap-3">
              <i className="bi bi-briefcase"></i>
              Recommmended jobs
            </li>
            <li>
              <Link
                href=""
                className="flex gap-3 text-decoration-none text-reset"
              >
                <i className="bi bi-bookmark"></i>Saved jobs
              </Link>
            </li>
            <li className="flex gap-3">
              <i className="bi bi-bar-chart-line"></i>Profile performance
            </li>
            <li className="flex gap-3">
              <i className="bi bi-eye"></i>Display prefrences
            </li>
            <li className="flex gap-3">
              <i className="bi bi-duffle"></i>Jobseeker services
            </li>
            <li className="flex gap-3">
              <i className="bi bi-list-ul"></i>Naukri blog
            </li>
            <li className="flex gap-3">
              <i className="bi bi-question-circle"></i>How naukri works
            </li>
            <li className="flex gap-3">
              <i className="bo bi-info-circle"></i>About us
            </li>
            <div className="">
              <li
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <i className="bi bi-gear"></i> Settings
              </li>
              {openMenu && (
                <ul className="cursor-pointer mt-2 space-y-3">
                 <Link href="/userHomepage/logoutUser">
                  <li>Logout</li>
                 </Link>
                  <li>
                    Deactivate
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
