"use client";
import React, {useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 import Sidebar from "@/components/sidebar/sidebar";
 import Navabar from "@/components/navbar/navbar";
import Footer from "@/module/footer/footer";
import Cookies from "js-cookie";
import axios from "axios";
const UserLayout = ({ children }) => {
  const [authenticate,setAuthenticate]=useState(null);
  const [isOpenSide, setIsOpenSide] = useState(false);
  const router=useRouter();
  const toggleSidebar = () => {
    setIsOpenSide(!isOpenSide);
  };
      useEffect(() => {
    const checkAuth = () => {
      setTimeout(async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/users/check", {
            withCredentials: true,
          });
          if (res.status === 200 && res.data.authenticated) {
            setAuthenticate(true);
          } else {
            setAuthenticate(false);
            router.replace("/login/users");
          }
        } catch (err) {
          setAuthenticate(false);
          router.replace("/login/users");
        }
      }, 200); // Delay to ensure cookie exists
    };

    checkAuth();
  }, [router]);

  // Block rendering while auth check runs
  if (!authenticate) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg">Checking login...</p>
      </div>
    );
  }

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
        <main className="w-full overflow-y-scroll" style={{scrollbarWidth:"none"}}>{children}</main>
      </div>
      <div className=" md:hidden ">
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
