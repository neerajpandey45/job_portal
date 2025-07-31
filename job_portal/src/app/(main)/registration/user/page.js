"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/services/axiosInstance";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "@/utils/formValidation.js/formValidation";
import { useForm } from "react-hook-form";
const UserRegistration = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const onSubmit = async (data) => {
    setServerError("");
    setSuccess("");
    try {
      const res = await axiosInstance.post("/users/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      setSuccess("User registered successfully!");
      reset(); // Clear form
      setTimeout(() => {
        router.push("/login/users");
      }, 1000);
    } catch (err) {
      setServerError(
        err.response?.data?.error || "Server error. Please try again."
      );
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-300">
      <div className="flex w-full justify-center items-center">
        <form
          className="flex flex-col gap-4 sm:w-[50%] md:w-[50%] lg:w-[40%] xl:w-[30%] min-h-[50vh] justify-center items-center shadow bg-white py-3 px-4 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-xl font-bold">User Registration</h2>

          <div className="w-full">
            <label>First Name</label>
            <input
              type="text"
              {...register("firstName", {
                required: "first name is required",
                validate: validateName,
              })}
              placeholder="First name"
              className="w-full px-3 border border-black h-[30px] rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label>Last Name</label>
            <input
              type="text"
              {...register("lastName", {
                validate: validateName,
              })}
              placeholder="Last name"
              className="w-full px-3 border border-black h-[30px] rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
                validate: validateEmail,
              })}
              placeholder="name@gmail.com"
              className="w-full px-3 border border-black h-[30px] rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <label>Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  validate: validatePassword,
                })}
                placeholder="Enter password"
                className="w-full px-3 pr-10 border border-black h-[30px] rounded-md"
              />
              <i
                className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"} 
        absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {serverError && <p className="text-red-500">{serverError}</p>}
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
