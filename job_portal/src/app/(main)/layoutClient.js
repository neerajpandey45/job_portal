"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar/sidebar";
import Navabar from "@/components/navbar/navbar";
import Footer from "@/module/footer/footer";
import axiosInstance from "@/services/axiosInstance"; // use interceptor setup
import { useTheme } from "@/utils/screenTheme/themeContext";
const UserLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenSide, setIsOpenSide] = useState(false);
  const {isDark}=useTheme(false);
  const router = useRouter();
  const pathname = usePathname();
  const toggleSidebar = () => {
    setIsOpenSide(!isOpenSide);
  };
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login/users");
        return;
      }
      try {
        const res = await axiosInstance.get("/users/check");
        if (res.status === 200 && res.data.authenticated) {
          console.log("✅ Authenticated successfully.");
          setIsAuthenticated(true);
        } else {
          router.replace("/login/users");
        }
      } catch (error) {
        console.log(
          "❌ Error during auth check:",
          error.response?.data || error.message
        );
        router.replace("/login/users");
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg">Checking login...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null; // avoid rendering for unauthorized users

  return (
    <div className="flex flex-col h-screen overflow-x-auto">
      <Navabar onToggleSidebar={toggleSidebar} />
      <div className="flex flex-grow overflow-y-auto">
        <div className="hidden md:block">
          <Sidebar />
        </div>
         {isOpenSide && (
          <div className={`fixed top-0 left-0 h-screen w-[70%] shadow z-40 md:hidden ${isDark?"bg-gray-900 text-white":"bg-white text-black"}`}>
            <Sidebar setOpenSide={setIsOpenSide} />
          </div>
        )}
        <main
          className="w-full overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          {children}
        </main>
      </div>
     
      {pathname === "/userHomepage" && (
        <div className="md:hidden">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default UserLayout;
