import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.159.136.43:5000/api", // 🔁 Base URL for all requests
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
