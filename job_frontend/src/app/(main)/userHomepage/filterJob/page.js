"use client";
import axiosInstance from "@/services/axiosInstance";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import JobList from "../jobCard/jobCard";
const FilterJobResult = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const location = searchParams.get("location");
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axiosInstance.get("/filter/job", {
          params: { title, location },
        });
        setResult(res.data || []);
      } catch (err) {
        console.log("err", err);
      }
    };
    if (title && location) {
      fetchJob();
    }
  }, [title, location]);
  return (
    <div className="w-full">
      <div className="w-max mx-4 p-1 mt-2 border rounded-3 bg-gray-200">
        <h6>Total Jobs:{result.length}</h6>
      </div>
      <div className="row flex justify-center p-2">
        {result.length > 0 ? (
          result.map((job) => (
            <div key={job._id} className="col-12 col-md-7 mb-4">
              <JobList job={job} />
            </div>
          ))
        ) : (
          <p className="text-danger text-center">No matching jobs found</p>
        )}
      </div>
    </div>
  );
};

export default FilterJobResult;
