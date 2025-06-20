"use client";
import React from "react";
import { useState } from "react";
import LocationState from "../location/page";
const JobPage = ({onSelect}) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(false);
  const searchBox = () => {
    setLabel(true);
  };
  const locationBox = () => {
    setOpen(true);
  };
  return (
    <div className="w-full min-h-[40vh]">
      <h3 className="px-3 mt-4">Search jobs and internships</h3>
      <div className="w-full flex flex-col py-2 gap-1">
        <div className="w-full">
          {label && (
            <label className="px-3 text-primary">
              skills, compaines, designations
            </label>
          )}
        </div>
        <input
          type="text"
          placeholder="skills,designations,companies"
          className="w-full px-3 outline-none"
          onClick={searchBox}
        />
      </div>
      <hr></hr>
      <LocationState/>
    </div>
  );
};

export default JobPage;
