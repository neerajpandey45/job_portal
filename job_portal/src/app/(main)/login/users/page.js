"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const UsersLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [err, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      },{
  withCredentials: true,
}
    );
      toast.success("Login successful!");
      router.push("/userHomepage");
    } catch (err) {
      if (err.response?.status === 404) {
        toast.error("User not found.");
        setTimeout(() => {
          router.push("/registration/user");
        }, 1000); // Delay to let the toast show
      } else if (err.response?.status === 400) {
        toast.error(" invalid Creadentials");
      } else {
        toast.error("something went wrong");
      }
      setError(err.response?.data?.error || "Login failed");
    }
  };
  return (      
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
  <div className="w-full max-w-xl flex flex-col md:flex-row rounded-lg shadow-xl overflow-hidden bg-white mx-3">
    {/* Left Welcome Panel */}
    <div className="flex flex-col justify-center items-center text-white bg-gradient-to-b from-indigo-600 to-purple-500 w-full md:w-1/2 p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to Login</h2>
      <p className="text-center">Sign in to your account</p>
    </div>
    {/* Right Login Form */}
    <div className="w-full md:w-1/2 lg:w-1/2 p-3 ">
      <div className="w-full">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Username/email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 "
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <i
              className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"} absolute top-[38px] right-4 cursor-pointer`}
              onClick={() => setShowPass(!showPass)}
            ></i>
          </div>
          <div className="flex items-center justify-between text-sm">
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Submit
            </button>
            <p className="text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> 

  );
};

export default UsersLogin;
