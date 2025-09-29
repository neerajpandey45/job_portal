"use client";
import React from "react";
const CustomLoader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative">
        <div
          className="animate-spin"
          style={{
            width: "64px",
            height: "64px",
            border: "2px solid",
            borderTopColor: "#3498db",     // blue
            borderRightColor: "#e74c3c",   // red
            borderBottomColor: "#f1c40f",  // yellow
            borderLeftColor: "#2ecc71",    // green
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <p className="ml-4 text-xl text-black dark:text-white">Please wait....</p>
    </div>
    
  );
};

export default CustomLoader;
