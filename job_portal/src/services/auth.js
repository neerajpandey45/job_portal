// services/auth.js
import axios from "axios";
import Cookies from "js-cookie";

export const login = async (email, password) => {
  const res = await axios.post("http://localhost:5000/api/users/login", {
    email,
    password,
  });

  const { token } = res.data;

  // Set token in cookie (expires in 1 hour)
  Cookies.set("token", token, { expires: 1 / 24 }); // 1 hour
  return res.data;
};
