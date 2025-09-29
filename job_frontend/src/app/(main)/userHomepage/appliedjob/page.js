"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import axiosInstance from "@/services/axiosInstance";
const AppliedJob = ({ onClose }) => {
  const { id: jobId } = useParams(); // get jobId from URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [resume, setResume] = useState(null); // Store resume file

  const handleApply = async (e) => {
    e.preventDefault();

    if (!resume) {
      toast.error("Please upload a resume (PDF)");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("contactNumber", formData.contactNumber);
    data.append("resume", resume); // Actual file
    try {
      await axiosInstance.post(
        `/applied-jobs/apply/${jobId}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("Successfully applied!");
      if (onClose) onClose();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong");
    }
  };
  return (
    <form onSubmit={handleApply} className="mt-4 border p-3 shadow rounded">
      <h5>Apply for this Job</h5>
      <input
        type="text"
        placeholder="Your Name"
        className="form-control my-2"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="form-control my-2"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Contact Number"
        className="form-control my-2"
        value={formData.contactNumber}
        onChange={(e) =>
          setFormData({ ...formData, contactNumber: e.target.value })
        }
        required
      />
      <input
        type="file"
        accept=".pdf"
        className="form-control my-2"
        onChange={(e) => setResume(e.target.files[0])}
        required
      />
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-success" type="submit">
          Submit
        </button>
        <button className="btn btn-secondary" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AppliedJob;
