"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/utils/screenTheme/themeContext";
const Sidebar = ({ setOpenSide }) => {
  const {isDark,toggleTheme}=useTheme(false);
  const [openMenu, setOpenMenu] = useState(false);
  console.log(isDark);
  return (
    <div className="w-full flex flex-wrap ">
      <div className="w-full md:w-[20vw] min-h-[100vh] shadow p-3 cursor-pointer ">
        <div className="w-full flex gap-4 ">
          <i className="bi bi-person-circle"></i>
          <h5>
            <Link href="/userHomepage/userFullDetails" className="text-decoration-none text-reset ">
              Profile
            </Link>
          </h5>

          <div className="md:hidden flex justify-end w-full text-danger">
            <i
              className="bi bi-x-circle-fill"
              onClick={() => setOpenSide(false)}
            ></i>
          </div>
        </div>
        <div>
          <ul className="text-break list-none m-0 p-0 space-y-5 mt-2">
            <li>
              <Link
                href="/userHomepage/search"
                className="flex gap-3 text-decoration-none text-reset"
              >
                <i className="bi bi-search"></i>
                Search jobs
              </Link>
            </li>
            <Link
              href="/userHomepage/jobCard"
              className="flex gap-3 text-decoration-none text-reset"
            >
              {/* <li> */}
              <i className="bi bi-briefcase"></i>
              Recommmended jobs
              {/* </li> */}
            </Link>
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
            <li className="flex gap-3" onClick={toggleTheme}>
              <i className="bi bi-eye" >
            </i>
            switch to {`${isDark?"light":"dark"}`}
            </li>
            <li className="flex gap-3">
              <i className="bi bi-duffle"></i>Jobseeker services
            </li>
            <Link
              href=""
              className="flex gap-3 text-decoration-none text-reset"
            >
              <i className="bi bi-list-ul"></i>Naukri blog
            </Link>
            {/* <li className="flex gap-3">
              <i className="bi bi-list-ul"></i>Naukri blog
            </li> */}
            <li className="flex gap-3">
              <i className="bi bi-question-circle"></i>How jobportal works
            </li>

            <li>
              <Link
                href="/userHomepage/about"
                className="flex gap-3 text-decoration-none text-reset"
              >
                <i className="bo bi-info-circle"></i>
                About us
              </Link>
            </li>
            <div className="">
              <li
                className="flex gap-3 items-center "
                onClick={() => setOpenMenu(!openMenu)}
              >
                <i className="bi bi-gear"></i> Settings
              </li>
              {openMenu && (
                <ul className="cursor-pointer mt-2 space-y-3">
                  <Link href="/userHomepage/logoutUser">
                    <li>Logout</li>
                  </Link>
                  <li>Deactivate</li>
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
