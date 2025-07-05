"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const RecruiterSidebar = () => {
  const [open,setopen]=useState(false);
  const router = useRouter();
  return (
    <div className="w-[20vw] h-screen bg-warning ">
      <div className="mt-10">
        <ul className="space-y-5 cursor-pointer">
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
          <li>Veiw Appllications</li>
          <div>
            <li className="flex gap-3" onClick={()=>setopen(!open)}>
              <i className="bi bi-gear"></i>
              Setting
                </li>
             {open && (
               <ul className="space-y-2 mt-2">
           <Link href="recruiterHomepage/logoutRecruiter">
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
