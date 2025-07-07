"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

const AppliedJob = ({ onClose }) => {
  const { id: jobId } = useParams(); // ✅ get jobId from URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });

  const handleApply = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/api/applied-jobs/apply/${jobId}`, // ✅ send jobId in URL
        formData, // ✅ only name, email, contactNumber
        { withCredentials: true }
      );
      toast.success("Successfully applied!");
      if (onClose) onClose(); // close form after success
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
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-success" type="submit">Submit</button>
        <button className="btn btn-secondary" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AppliedJob;
