import React from "react";
import RecruiterNavbar from "./navbar/recruiterNavabar";
import RecruiterSidebar from "./sidebar/sidebar";

const RlayoutClient = ({children}) => {
  return (
    <div>
        <RecruiterNavbar/>
        <div className="flex ">
            <RecruiterSidebar/>
            <main className="w-full">{children}</main>
        </div>
    </div>
  )
};

export default RlayoutClient;
