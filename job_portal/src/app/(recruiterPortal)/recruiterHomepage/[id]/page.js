"use client";
import axiosInstance from "@/services/axiosInstance";
// import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const AllApplications = () => {
  const { id } = useParams();
  const [application, setApplication] = useState([]);
  console.log("URL id param:", id);
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await axiosInstance.get(
          `/recruiters/applications/${id}`,
          // {
          //   withCredentials: true,
          // }
        );
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

    const fullURL = `http://localhost:5000${resumePath}`;
    window.open(fullURL, "_blank", "noopener,noreferrer");
  };

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
  href={`http://localhost:5000${applicant.resume}`}
  download // ✅ triggers direct download
  className="btn btn-sm btn-primary"
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
