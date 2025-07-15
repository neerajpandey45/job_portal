import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-3 flex justify-between items-center w-max min-w-full gap-3 py-2">
      <ul className=" flex gap-4 list-none m-0 p-0 w-full justify-between text-white">
        <li>Home</li>
        <Link
          href="/userHomepage/allAppliedJobs"
          className=" text-decoration-none text-reset"
        >
          <li>Apply</li>
        </Link>
        <li>Invites</li>
        <Link
          href="/userHomepage/userFullProfile"
          className=" text-decoration-none text-reset"
        >
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
