"use client";
import axiosInstance from "@/services/axiosInstance";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const router = useRouter();
  const [otpVerify, setOtpVerify] = useState("");
  const [showPass, setShowPass] = useState();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users/send-otp", {
        email,
      });
      toast.success("otp sent");
    } catch (err) {
      const status=err?.response?.status
      if(status===400) {
        toast.error("please enter valid username")
      }
      else if(status===404){
        toast.error("user not found")
      }
      console.log("error", err);
    }
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users/verify-otp", { email, otp });
      toast.success("verify successfully");
      setOtpVerify(true);
    } catch (err) {
      toast.error("please enter valid otp")
      console.log("failed to verify", err);
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== cnfPassword) {
      toast.error("password should be same");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }
    try {
      const res = await axiosInstance.post("/users/reset-password", {
        email,
        newPassword,
      });
      toast.success("password updated successfully");
      router.push("/login/users");
    } catch (err) {
      console.log("something went wrong");
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gradient-to-r  from-indigo-400 via-purple-400 to-indigo-500">
      {!otpVerify ? (
        <form className="shadow bg-white p-3 py-5 rounded-3">
          <div className="space-y-2">
            <label>username</label>
            <input
              type="email"
              placeholder="user@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-2 py-1 px-2 mb-3"
              required
            />
          </div>
          <div>
            <button onClick={handleSendOtp} className="btn btn-primary btn-sm w-full">
              send otp
            </button>
          </div>
          <div className="space-y-2">
            <label>enter Otp</label>
            <input
              type="text"
              placeholder="enter otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-2 w-full py-1 px-2 mb-2"
              required
            />
            <button
              className="btn btn-primary btn-sm w-full"
              onClick={handleVerifyOtp}
            >
              Verify Otp
            </button>
          </div>
        </form>
      ) : (
        <form
          className="shadow bg-white p-3 gap-3 rounded-3"
          onSubmit={handleResetPassword}
        >
          <div className="space-y-3">
            <label>new password</label>
            <input
              type="text"
              placeholder="enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded-2 w-full py-1 px-2"
              required
            />
          </div>
          <div className="space-y-3 relative">
            <label>confirm password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="enter confirm password"
              value={cnfPassword}
              onChange={(e) => setcnfPassword(e.target.value)}
              className="border rounded-2 w-full py-1 px-2 mb-2"
              required
            />
            <i
              className={`bi ${
                showPass ? "bi-eye-slash" : "bi-eye"
              } absolute top-[38px] right-4 cursor-pointer`}
              onClick={() => setShowPass(!showPass)}
            ></i>
          </div>
          <button className="btn btn-primary btn-sm w-full">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
