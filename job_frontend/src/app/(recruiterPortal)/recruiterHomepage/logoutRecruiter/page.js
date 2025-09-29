"use client";
import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
const LogoutRecuiter = () => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      try {
        await axiosInstance.post(
          "/recruiters/logout",
        );
        localStorage.removeItem("items");
        toast.success("logout successfully");
        router.push("/");
      } catch (err) {
        console.log("err", err);
      }
    };
    logout();
  }, [router]);
  return null;
};
export default LogoutRecuiter;
