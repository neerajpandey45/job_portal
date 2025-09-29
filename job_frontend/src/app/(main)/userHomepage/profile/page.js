"use client";
import axiosInstance from "@/services/axiosInstance";
import React, { useEffect, useState } from "react";
const UserProfile = ({ isOpen, toggleProfile }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [err,setError]=useState(false);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axiosInstance.get("/users/profile", {
        });
      
        setUser(res.data);
        setError(false);
      } catch (err) {
        console.log("user not found", err);
        setError(true);
      }finally{
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);
  if (!isOpen) return null; 
 if (loading) {
    return (
      <div className="fixed w-25 h-screen top-0 right-0 shadow bg-white text-black p-4 z-50">
        <p>Loading...</p>
      </div>
    );
  }
  if (!user)
    return (
      <p className="text-center text-danger">
        Not authorized or error loading profile.
      </p>
    );
  return (
    <>
      {isOpen && (
        <div className="fixed w-25 h-screen top-0 right-0 shadow bg-white text-black p-4 z-50">
          <i
            className="bi bi-x-lg text-xl text-danger  flex justify-end "
            onClick={toggleProfile}
          ></i>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default UserProfile;
