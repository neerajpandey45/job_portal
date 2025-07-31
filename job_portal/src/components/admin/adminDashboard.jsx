"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import axiosInstance from "@/services/axiosInstance";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const AdminDashboard = () => {
  const [recuiter, setRecruiter] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recruiteRes, userRes] = await Promise.all([
          axiosInstance.get("/admin/allRecruiters"),
          axiosInstance.get("admin/allUsers"),
        ]);
        setRecruiter(recruiteRes.data);
        setUser(userRes.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, []);
  const series = [
    {
      name: "Recruiters",
      data: [recuiter.length],
    },
    {
      name: "Users",
      data: [user.length],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      zoom: { enabled: true },
      toolbar: { show: true },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "10%",
      },
    },
    dataLabels: { enabled: true },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["total data"],
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    colors: ["#008FFB", "#FEB019"],
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
  };
  return (
    <div className="w-full">
      <div className="flex justify-center gap-5 mb-2">
        <h5 className="bg-blue-600 py-2 p-3 text-white rounded-5">
          Total Recruiter:
          {recuiter.length}
        </h5>
        <h5 className="bg-green-600 py-2 p-3 text-white rounded-5">
          Total Users:{user.length}
        </h5>
      </div>
      <h6 className="text-center mb-3 font-bold">User Growth Overview</h6>
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded shadow w-[50%]">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
