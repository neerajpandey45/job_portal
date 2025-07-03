"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const RecruiterProfile = () => {
  const [recruiter, setRecruiter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/recruiters/profile", {
          withCredentials: true, // 🔐 send cookie
        });
        setRecruiter(res.data);
      } catch (err) {
        console.error("Error fetching recruiter profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-center py-4">Loading...</p>;

  if (!recruiter) return <p className="text-center text-danger">Not authorized or error loading profile.</p>;
  return (
    <div className="p-4">
      {/* <h2 className="text-xl font-semibold mb-4">Recruiter Profile</h2> */}
      <p><strong></strong> {recruiter.firstName} {recruiter.lastName}</p>
      <p><strong></strong> {recruiter.email}</p>
    </div>
  );
};

export default RecruiterProfile;