"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const UserProfile = ({ isOpen, toggleProfile }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.log("user not found", err);
      }
    };
    fetchUserProfile();
  }, []);

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
