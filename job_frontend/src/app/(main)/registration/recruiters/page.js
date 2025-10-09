"use client";
import axiosInstance from "@/services/axiosInstance";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "@/utils/formValidation.js/formValidation";
const RecruiterRegistration = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  const [serverError, setServerError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const onSubmit = async (data) => {
    if (data.password != data.confirmPassword) {
      return toast.error("Password != ConfirmPassword");
    }
    setServerError("");
    try {
      const res = await axiosInstance.post("/recruiters/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        location: data.location,
        pincode: data.pincode,
        state: data.state,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      toast.success("Registration is sucessfull");
      reset(); // Clear form
      setTimeout(() => {
        router.push("/login/recruiter");
      }, 1000);
    } catch (err) {
      setServerError(
        err.response?.data?.error || "Server error. Please try again."
      );
    }
  };
  return (
    <div className="container-fluid h-screen bg-blue-300">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-sm-6 col-lg-6">
          <div className="card shadow mt-[10%] py-3">
            <h5 className="text-center">Register</h5>
            <form action="" className="p-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">first name</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "first name is required",
                      validate: validateName,
                    })}
                    placeholder="first name"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">last name</label>
                  <input
                    type="text"
                    {...register("lastName", {
                      validate: validateName,
                    })}
                    placeholder="last name"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">company name</label>
                  <input
                    type="text"
                    {...register("companyName",{
                      required:"name is required",
                      validate:validateName
                    })}
                    placeholder="campany name"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">location</label>
                  <input
                    type="text"
                    {...register("location")}
                    placeholder="location"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-xs">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">pincode</label>
                  <input
                    type="text"
                    {...register("pincode",
                      { required: "Pincode is required",
                    pattern: {
                       value: /^[1-9][0-9]{5}$/, // Indian pincode pattern
                        message: "Enter a valid 6-digit pincode",
                           }}
                    )}
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-xs">
                      {errors.pincode.message}
                    </p>
                  )}
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">state</label>
                  <input
                    type="text"
                    {...register("state")}
                    placeholder="enter state"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12  space-y-2">
                  <label htmlFor="">email</label>
                  <input
                    {...register("email", {
                      required: "email is required",
                      validate: validateEmail,
                    })}
                    type="email"
                    placeholder="email"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2 relative">
                  <label htmlFor="">password</label>
                  <input
                    type={showPass ? "Text" : "password"}
                    {...register("password", {
                      required: "password is required",
                      validate: validatePassword,
                    })}
                    placeholder="enter password"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  <i
                    className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}
                    absolute right-6 top-[37px] cursor-pointer`}
                    onClick={() => setShowPass(!showPass)}
                  ></i>
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">confirm password</label>
                  <input
                    type="text"
                    {...register("confirmPassword", {
                      required: "password is required",
                    })}
                    placeholder="confirm passowrd"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="btn btn-primary"
                  style={{ width: "120px", height: "40px" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterRegistration;
