"use client";
import MainPage from "@/module/homePage/mainPage";
// import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleUser = () => {
    router.push("/login/users");
  };
  const handleRecruiter = () => {
    router.push("/login/recruiter");
  };
  return (
    <div className="full w-max min-w-full">
      <div className="flex justify-between px-4 py-6 md:py-2 bg-gray-800 text-white ">
        <div className="flex gap-5">
          <p className="cursor-pointer text-4xl">Home</p>
        </div>
        <div className="flex gap-3 ">
          <div className="flex gap-3">
            <button
              className="btn btn-primary btn-sm border rounded-5 min-w-[80px]"
              onClick={handleUser}
            >
            <span className="text-4xl">login</span>
            </button>
          </div>
     
          <button className="btn btn-success btn-sm border rounded-5" onClick={handleRecruiter}>

           <span className="text-4xl"> recruiter</span>
           
            </button>

         
        </div>
      </div>
      <MainPage/>
    </div>
  );
}
