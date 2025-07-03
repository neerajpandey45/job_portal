"use client";
import React from "react";
import { useRouter } from "next/navigation";
const RecruiterSidebar = () => {
  const router=useRouter();
  return(
    <div className="w-[20vw] h-screen bg-warning ">
   <div className="mt-10">
       <ul className="space-y-5 cursor-pointer">
        <li onClick={()=>router.push("/recruiterHomepage/jobform")}>Upoad job</li>
        <li onClick={()=>router.push("/recruiterHomepage/dashboard")}>Dashboard</li>
        <li onClick={()=>router.push("/recruiterHomepage/jobcard")}>All posted jobs</li>
        <li>Total applicatons</li>
        <li>Veiw Appllications</li>
      </ul>
   </div>
    </div>
  )
};

export default RecruiterSidebar;
