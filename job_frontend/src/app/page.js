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
      <div className="flex justify-between px-4 py-2 bg-gray-800 text-white">
        <div className="flex gap-5">
          <p className="cursor-pointer">Home</p>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <button
              className="btn btn-primary btn-sm border rounded-5 w-[80px]"
              onClick={handleUser}
            >
              login
            </button>
            <button
              className="btn btn-danger border rounded-5"
              onClick={() => router.push("/registration/user")}
            >
              register
            </button>
          </div>
          <button className="btn btn-success btn-sm border rounded-5 w-[80px]" onClick={handleRecruiter}>recruiter</button>
        </div>
      </div>
      <MainPage/>
    </div>
  );
}
