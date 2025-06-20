import React from "react";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-[20vw] h-[100vh] shadow p-3 ">
        <div className="w-full flex gap-4 h-[10vh]">
          <i className="bi bi-person-circle"></i>
          <h5>Profile</h5>
        </div>
        <div>
          <ul className="text-break list-none m-0 p-0 space-y-5">
            <li>
              <Link
                href="/searchJobs"
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
              <i className="bi bi-gear"></i>setting
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
