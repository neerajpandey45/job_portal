"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const RecruiterSidebar = ({setOpenSide}) => {
  const [open, setopen] = useState(false);
  console.log(setOpenSide);
  const router = useRouter();
  return (
    <div className="w-full md:w-[20vw] min-h-[100vh] bg-white z-999 shadow cursor-pointer">
      <div className="pt-3">
        <ul className="space-y-5 cursor-pointer">
          <div className="md:hidden flex justify-end w-full text-danger">
            <i className="bi bi-x-lg mr-3"
            onClick={()=>setOpenSide(false)}
            ></i>
          </div>
          <li onClick={() => router.push("/recruiterHomepage/jobform")}>
            Upoad job
          </li>
          <li onClick={() => router.push("/recruiterHomepage/dashboard")}>
            Dashboard
          </li>
          <li onClick={() => router.push("/recruiterHomepage/jobcard")}>
            All posted jobs
          </li>
          <li>Total applicatons</li>
          <Link href={`/recruiterHomepage/veiwApplications`}>
            <li>Veiw Appllications</li>
          </Link>
          <div>
            <li className="flex gap-3" onClick={() => setopen(!open)}>
              <i className="bi bi-gear"></i>
              Setting
            </li>
            {open && (
              <ul className="space-y-2 mt-2">
                <Link href="/recruiterHomepage/logoutRecruiter">
                  <li>logout</li>
                </Link>
                <li>Deactivate</li>
              </ul>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RecruiterSidebar;
