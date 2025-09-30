// pages/profile.js or in useEffect of a component
"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Auth failed", err));
  }, []);

  return (
    <div>
      {user ? <h1>Welcome {user.name}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default Profile;
