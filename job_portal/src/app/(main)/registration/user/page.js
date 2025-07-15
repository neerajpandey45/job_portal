"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/services/axiosInstance";
const UserRegistration = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(formData.username)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const res = await axiosInstance.post("/users/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.username,
        password: formData.password,
      });

      setSuccess("User registered successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      });
      setTimeout(() => {
        router.push("/login/users"); // ✅ Navigate to login
      }, 1000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-300">
      <div className="flex w-full justify-center items-center">
        <form
          className="flex flex-col gap-4 md:w-[30%] min-h-[50vh] justify-center items-center shadow bg-white py-3 px-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold">User Registration</h2>

          <div className="w-full">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full px-3 border border-black h-[30px] rounded-md"
              required
            />
          </div>

          <div className="w-full">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full px-3 border border-black h-[30px] rounded-md"
            />
          </div>

          <div className="w-full">
            <label>Email</label>
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="name@gmail.com"
              className="w-full px-3 border border-black h-[30px] rounded-md"
              required
            />
          </div>

          <div className="w-full relative">
            <label>Password</label>
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-3 border border-black h-[30px] rounded-md"
              required
            />
            <i
              className={`bi ${
                showPass ? "bi-eye-slash" : "bi-eye"
              } absolute right-5 top-50`}
              onClick={() => setShowPass(!showPass)}
            ></i>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <div className="mb-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
