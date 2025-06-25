"use client";
import React, {useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 import Sidebar from "@/components/sidebar/sidebar";
 import Navabar from "@/components/navbar/navbar";
import Footer from "@/module/footer/footer";
import Cookies from "js-cookie";
const LayoutClient = ({ children }) => {
  const [authenticate,setAuthenticate]=useState(null);
  const [isOpenSide, setIsOpenSide] = useState(false);
  const router=useRouter();
  const toggleSidebar = () => {
    setIsOpenSide(!isOpenSide);
  };
  useEffect(()=>{
    const token=Cookies.get("token");
    // const token = sessionStorage.getItem("token");
    if(!token){
      router.replace("/login/users")
      setAuthenticate(false)
    }
    else{
      setAuthenticate(true);
    }
  },[router])
  if (!authenticate) return null; // Don't show layout while checking
  return (
   <div className="flex flex-col h-screen overflow-x-auto">
        <Navabar onToggleSidebar={toggleSidebar} />
      <div className="flex flex-grow overflow-y-auto">
        {/* Sidebar desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {isOpenSide && (
          <div className="fixed top-0 left-0 h-screen w-[70%] bg-white z-40 shadow-md md:hidden">
            <Sidebar setOpenSide={setIsOpenSide} />
          </div>
        )}
        <main className="w-full">{children}</main>
      </div>
      <div className=" md:hidden ">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutClient;
