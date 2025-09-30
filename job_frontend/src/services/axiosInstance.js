import axios from "axios";
const axiosInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: "http://job-portal-c0iw.onrender.com/api", // 🔁 Base URL for all requests
});
// ✅ Interceptor to attach token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
export default axiosInstance;
