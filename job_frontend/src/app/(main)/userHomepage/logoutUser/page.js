"use client";
import { useRouter } from "next/navigation";
import { useEffect} from "react";
import { toast} from "react-toastify";
const LogoutUser = () => {
  const router = useRouter();
  useEffect(() => {
    const handleLogout = () => {
      try {
        localStorage.removeItem("token");
        toast.success("logout successfully");
        router.push("/login/users"); // or home page
      } catch (err) {}
    };
    handleLogout();
  }, [router]);
  return null;
};

export default LogoutUser;
