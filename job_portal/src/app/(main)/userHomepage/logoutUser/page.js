"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const logoutUser = () => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(
          "http://localhost:5000/api/users/logout",
          {},
          {
            withCredentials: true,
          }
        );
        toast.success("logout succesfully");
        router.push("/login/users");
      } catch (err) {
        console.log("error", err);
      }
    };
    logout();
  }, [router]);
  return null;
};

export default logoutUser;
