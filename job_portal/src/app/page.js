"use client";
import MainPage from "@/module/homePage/mainPage";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleUser = () => {
    router.push("/login/users");
  };
  const handleAdmin = () => {
    router.push("/login/admin");
  };
  const handleRecruiter = () => {
    router.push("/login/recruiter");
  };
  return (
    <div className="w-full">
      <div className="flex justify-between px-4 py-2 bg-gray-800 text-white">
        <div className="flex gap-5">
          <p className="cursor-pointer" onClick={handleAdmin}>
            Adminlogin
          </p>
          <p>About</p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-1">
            <button
              className="btn btn-primary btn-sm border rounded-5 w-[80px]"
              onClick={handleUser}
            >
              login
            </button>
            <button className="btn btn-danger border rounded-5" onClick={()=>router.push("/registration/user")}>
              register
            </button>
          </div>
          <p className="cursor-pointer" onClick={handleRecruiter}>
            recruiter
          </p>
        </div>
      </div>
      <MainPage/>
    </div>
  );
}
