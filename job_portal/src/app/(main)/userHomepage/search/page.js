"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const JobSearchPage = () => {
  const [showLabel, setLabel] = useState(false);
  const [filterJob, setFilterJob] = useState({
    title: "",
    location: "",
  });
  const router = useRouter();
  const handleSearch = async () => {
    if (!filterJob.title && !filterJob.location) {
      return;
    }
    router.push(
      `/userHomepage/filterJob?title=${filterJob.title}&location=${filterJob.location}`
    );
  };

  return (
    <div className="w-full min-h-[40vh]">
      <h3 className="px-3 mt-4">Search jobs and internships</h3>
      <div className="w-full flex flex-col py-2 gap-1">
        {showLabel && (
          <label className="px-3 text-primary">
            skills, compaines, designations
          </label>
        )}
        <input
          type="text"
          name="title"
          value={filterJob.title || ""}
          onChange={(e) =>
            setFilterJob({ ...filterJob, title: e.target.value })
          }
          placeholder="Enter job title"
          required
          className="w-full px-3 outline-none"
          onClick={() => setLabel(true)}
        />
      </div>
      <hr></hr>
      {showLabel && <label className="px-3 text-primary">location</label>}
      <input
        type="text"
        name="location"
        value={filterJob.location || ""}
        onChange={(e) =>
          setFilterJob({ ...filterJob, location: e.target.value })
        }
        placeholder="location"
        required
        className="w-full px-3 outline-none"
        onClick={()=>setLabel(true)}
      />
      <hr></hr>
      <div className="px-2">
        <button className="btn btn-primary btn-sm" onClick={handleSearch}>
          Search job
        </button>
      </div>
    </div>
  );
};
export default JobSearchPage;
