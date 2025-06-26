"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
const AdminDashboard = () => {
    const totalUsers = 1200;
    const totalRecruiters = 150;
    const series = [
    {
      name: "Recruiters",
      data: [10, 20, 30, 25, 35, 40],
    },
    {
      name: "Users",
      data: [50, 60, 80, 90, 110, 130],
    },
    {
      name: "New Users",
      data: [5, 10, 20, 15, 25, 30],
    },
  ];
const options = {
  chart: {
    type: "bar",
    zoom: { enabled: true },
    toolbar: { show:false },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "20%",
    },
  },
  dataLabels: { enabled: false },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  colors: ["#008FFB", "#00E396", "#FEB019"],
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
};
//   const options = {
//     chart: {
//       type: "line",
//       zoom: { enabled: true },
//       toolbar: { show: false },
//     },
//     dataLabels: { enabled: false },
//     stroke: { curve: "smooth" },
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//     },
//     colors: ["#008FFB", "#00E396", "#FEB019"],
//     legend: {
//       position: "top",
//       horizontalAlign: "right",
//     },
//   };
  return (
    <div className="w-full bg-white p-4 rounded shadow ">
         <div className="flex justify-center gap-5 mb-2">
            <h5 className="bg-blue-600 py-2 p-3 text-white rounded-5">Total Recruiter:{totalRecruiters}</h5>
            <h5 className="bg-green-600 py-2 p-3 text-white rounded-5">Total Users:{totalUsers}</h5>
         </div>
      <h6 className="text-center mb-3 font-bold">User Growth Overview</h6>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  )
};

export default AdminDashboard;
