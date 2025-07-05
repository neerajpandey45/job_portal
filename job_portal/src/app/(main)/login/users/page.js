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

    <div className="container-fluid flex justify-center min-h-screen items-center bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400 ">
      <div className="row w-full justify-center">
        <div className="col-12 col-md-4 col-lg-4">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div>
                <label>Username/email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-black rounded-3 px-3 h-[30px]"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-black rounded-3 px-3 h-[30px]"
                  required
                />
                <i
                  className={`bi ${
                    showPass ? "bi-eye-slash" : "bi-eye"
                  } absolute right-[20%]  cursor-pointer `}
                  onClick={() => setShowPass(!showPass)}
                ></i>
              </div>
              <div>
                <div className="flex justify-end gap-5">
                  <button className="btn btn-primary">Submit</button>
                  <p className="flex justify-end text-blue-600 cursor-pointer">forgot password ?</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default UsersLogin;
