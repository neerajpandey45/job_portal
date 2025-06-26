import React from "react";
const JobList = ({ name, experience, position, description }) => {
  return (
    <div className=" p-2 px-4 rounded-3 shadow h-[30vh] transition-all duration-300 mt-2">
      <div className="w-[80%]">
        <p>{position}</p>
      </div>
      <div className="flex gap-1">
        <i className="bi bi-geo-alt"></i>
        <p>{name}</p>
      </div>
      <div className="flex gap-1">
        <i className="bi bi-bag-dash"></i>
        <p> {experience}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobList;
