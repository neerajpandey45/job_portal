// "use client";
import React from "react";
const UserRegistration = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-300">
      <div className="flex  w-full justify-center items-center">
        <form className="flex flex-col gap-4 w-[30%] min-h-[50vh] justify-center items-center shadow bg-white py-3 rounded-3">
          <div>
            <label>first name</label>
            <input
              type="text"
              placeholder="first name"
              className="w-full px-3 border border-black h-[30px] rounded-md"
              required
            />
          </div>
          <div>
            <label>last name</label>
            <input
              type="text"
              placeholder="last name"
              className="w-full px-3 border border-black h-[30px] rounded-md"
            />
          </div>
          <div>
            <label>username</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full px-3 border border-black h-[30px] rounded-md"
              required
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="enter password "
              className="w-full px-3 border border-black h-[30px] rounded-md"
              required
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">register</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UserRegistration;
