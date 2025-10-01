"use client";
import axiosInstance from "@/services/axiosInstance";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const AllApplications = () => {
  const { id } = useParams();
//   const params = useParams();
// console.log("useParams value:", params);
  const [application, setApplication] = useState([]);
  // console.log("URL id param:", id);
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await axiosInstance.get(`/recruiters/applications/${id}`);
        setApplication(res.data.applicants);
      } catch (err) {
        console.log("error", err);
      }
    };
    if (id) {
      fetchApplication();
    }
  }, [id]);
  const handleOpenResume = (resumePath) => {
    if (!resumePath) {
      alert("Resume not uploaded");
      return;
    }
    const resumeBase = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');
      const fullURL = `${resumeBase}${resumePath}`;
    window.open(fullURL, "_blank", "noopener,noreferrer");
  };
  // console.log(application)
  return (
    <div className="p-4">
      <h2>Total Applications: {application.length}</h2>
      {application.map((applicant, index) => (
        <div
          key={index}
          className="border p-3 rounded bg-gray-100 my-2 shadow-sm "
        >
          <p>
            <strong>Name:</strong> {applicant.name}
          </p>
          <p>
            <strong>Email:</strong> {applicant.email}
          </p>
          <p>
            <strong>contactNumber:</strong> {applicant.contactNumber}
          </p>
          <div className="flex gap-3">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => handleOpenResume(applicant.resume)}
            >
              View Resume
            </button>
            <a
               href={`${process.env.NEXT_PUBLIC_API_URL}/resume/download?path=${applicant.resume}`}
              // href={`http://192.168.117.43:5000/api/resume/download?path=${applicant.resume}`}
              download
              className="btn btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllApplications;
