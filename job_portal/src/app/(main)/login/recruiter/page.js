"use client";
import axiosInstance from "@/services/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
export default function Recruiter() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [showPass ,setShowPass]=useState(false);
  const handle = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "/recruiters/login",
        { email, password } // ✅ request body
        // { withCredentials: true } // ✅ request config (separate)
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login successfully");
      router.push("/recruiterHomepage");
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
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
      <div>
        <h5 className="text-center py-3">This is recruiter page</h5>
      </div>
      <div className="container">
        <div className="row flex justify-center">
          <div className="col-12 col-md-6 col-lg-5  p-2">
            <form
              className="flex flex-col min-h-[40vh] py-4 gap-3 shadow bg-white rounded-3"
              onSubmit={handle}
            >
              <div className="px-5">
                <label className="mb-2 text-break">Username:</label>
                <input
                  type="text"
                  placeholder="enter user name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-black rounded-3 px-3 h-[30px]"
                  required
                />
              </div>
              <div className="relative px-5">
                <label className="mb-2 text-break">Password:</label>
                <input
                  type={`${showPass ?"text":"password"}`}
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-black rounded-3 px-3 h-[30px]"
                  required
                />
                <i className={`bi ${showPass?"bi-eye-slash":"bi-eye"} absolute right-[70px] cursor-pointer`} onClick={()=>setShowPass(!showPass)}></i>
              
              </div>
              <div className="flex justify-center">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <p className="text-center">Don't have any account?</p>
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
