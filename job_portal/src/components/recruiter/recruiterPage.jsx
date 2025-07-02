"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
const RecruiterPage = () => {
  return (
    <div className="container-fluid h-screen bg-blue-300">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-sm-6 col-lg-6">
          <div className="card shadow mt-[10%] py-3">
            <h5 className="text-center">Register</h5>
            <form action="" className="p-3">
              <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">first name</label>
                  <input
                    type="text"
                    placeholder="first name"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">last name</label>
                  <input
                    type="text"
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
                    placeholder="campany name"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">location</label>
                  <input
                    type="text"
                    placeholder="location"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">pincode</label>
                  <input
                    type="text"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">state</label>
                  <input
                    type="text"
                    placeholder="enter state"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
              </div>
               <div className="row mb-2">
                <div className="col-12  space-y-2">
                  <label htmlFor="">email</label>
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
              </div>
               <div className="row mb-2">
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">password</label>
                  <input
                    type="password"
                    placeholder="enter password"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
                <div className="col-12 col-md-6 space-y-2">
                  <label htmlFor="">confirm password</label>
                  <input
                    type="text"
                    placeholder="confirm passowrd"
                    className="w-full border border-black rounded-2 outline-none p-1"
                  />
                </div>
              </div>
            </form>
            <div className="w-full flex justify-center">
              <button className="btn btn-primary" style={{width:"120px",height:"40px"}}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
