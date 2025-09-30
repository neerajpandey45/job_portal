"use client";
import axiosInstance from "@/services/axiosInstance";
import CustomLoader from "@/utils/loader/loader";
import { useRouter } from "next/navigation";
import React,{ useState } from "react";
import { toast } from "react-toastify";
export default function Recruiter() {
  const router = useRouter();
  const [err, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handle = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const res = await axiosInstance.post("/recruiters/login", data);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successfully");
      setIsLoading(true);
      setTimeout(() => {
        router.push("/recruiterHomepage");
      }, 2000);
    } catch (err) {
      if (err.response?.status === 404) {
        toast.error("User not found");
      } else if (err.response?.status === 400) {
        toast.error("Invalid credentials");
      } else {
        toast.error("Something went wrong");
      }
      setError(err.response?.data?.error || "Login failed");
    }
  };
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
      <div>
        <h5 className="text-center py-3">This is recruiter page</h5>
      </div>
      <div className="container">
        <div className="row flex justify-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-4 mx-auto">
            <form
              className="flex flex-col min-h-[40vh] py-4 gap-3 shadow bg-white rounded-3"
              onSubmit={handle}
              form="form"
            >
              <div className="px-5">
                <label className="mb-2 text-break">Username:</label>
                <input
                  type="text"
                  placeholder="enter user name"
                  name="email"
                  id="email"
                  className="w-full border border-black rounded-3 px-3 h-[30px]"
                  required
                />
              </div>
              <div className="relative px-5">
                <label className="mb-2 text-break">Password:</label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="enter password"
                  name="password"
                  id="password"
                  className="w-full border border-black rounded-3 px-3 h-[30px]"
                  required
                />
                <i
                  className={`bi ${
                    showPass ? "bi-eye-slash" : "bi-eye"
                  } absolute right-[70px] cursor-pointer`}
                  onClick={() => setShowPass(!showPass)}
                ></i>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {/* <p className="text-center">Don't have any account?</p> */}
                <p>Don&apos;t have any account?</p>

                <button
                  className=" btn btn-danger"
                  onClick={() => router.push("/registration/recruiters")}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
