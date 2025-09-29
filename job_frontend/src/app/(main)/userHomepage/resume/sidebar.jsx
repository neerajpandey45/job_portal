import {
  EditResumeProfile,
  EditSkill,
} from "@/components/resumeEdit/resumeEditForm";
import React, { useState } from "react";

const ResumeSidebar = () => {
  const [index, setIndex] = useState("");
  const handleEdit = (active) => {
    setIndex((prev) => (prev === active ? "" : active));
  };
  console.log(index);
  return (
    <div className="bg-white shadow w-[45vw] mx-4 pt-5">
      <ul className="space-y-5">
        <div>
          <div className="flex justify-between">
            <label>Profile</label>
            <i
              className={`bi ${
                index === "profile" ? "bi-chevron-up" : "bi-chevron-down"
              } mr-5`}
              onClick={() => handleEdit("profile")}
            ></i>
          </div>
          {index === "profile" && <EditResumeProfile />}
        </div>
        <div className="flex justify-between">
          <label>Education</label>
          <i className="bi bi-chevron-down mr-5"></i>
        </div>
        <div className="flex justify-between">
          <label>Projects</label>
          <i className="bi bi-chevron-down mr-5"></i>
        </div>
        <div>
          <div className="flex justify-between">
            <label>Skillls</label>
            <i
              className={`bi ${
                index === "skills" ? "bi-chevron-up" : "bi-chevron-down"
              } mr-5`}
              onClick={() => handleEdit("skills")}
            ></i>
          </div>
          {index === "skills" && <EditSkill />}
        </div>
      </ul>
    </div>
  );
};

export default ResumeSidebar;
