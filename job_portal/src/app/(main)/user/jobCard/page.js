import React from "react";
import JobList from "./jobCard";
import { dummyData } from "@/components/jobs/jobdata";
const JobCard = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="row">
          {dummyData.map((items, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
              <JobList
                name={items.location}
                experience={items.experience}
                position={items.position}
                description={items.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
