"use client";
import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const logoutUser = () => {
  const router = useRouter();
  useEffect(() => {
    const handleLogout = () => {
      try {
        localStorage.removeItem("token");
        toast.success("logout successfully");
        router.push("/login/users"); // or home page
      } catch (err) {}
    };
    handleLogout();
  }, [router]);
  return null;
};

export default logoutUser;
