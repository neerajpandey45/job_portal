"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
const LogoutRecuiter = () => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(
          "http://localhost:5000/api/recruiters/logout",
          {},
          {
            withCredentials: true,
          }
        );
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
