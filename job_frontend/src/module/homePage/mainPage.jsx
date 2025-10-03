"use client";
import { useRouter } from "next/navigation";
import React from "react";
const MainPage = () => {
  const categories = [
    "Software Development",
    "Marketing",
    "Design",
    "Finance",
    "Sales",
    "Human Resources",
  ];

  const router = useRouter();
  return (
    <div className="w-full flex flex-col flex-wrap">
      <div className="w-full bg-blue-300 py-5 p-3">
        <h1 className="!text-6xl md:text-3xl font-bold">
          Find Your Dream Job Today
        </h1>
        <p className="text-black text-bold text-3xl sm:text-3xl md:text-3xl">
          Explore thousands of verified job listings across industries and
          connect with top recruiters.
        </p>
      </div>
      <section className="p-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="!text-6xl md:text-3xl font-bold mb-3">
            Welcome to NPJob Portal
          </h2>
          <p className="text-black text-5xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-center max-w-4xl mx-auto">
            We help you connect with companies hiring across India in fields
            like IT, Finance, Marketing, Design, and more. Create your profile,
            upload your resume, and apply with just one click.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-xl p-5 shadow min-h-[300px] ">
          <h3 className="!text-5xl mb-4 text-center">💼 5000+ Verified Jobs</h3>
          <p className="text-gray-800 mt-2 text-6xl md:text-3xl">
            Browse jobs posted by top companies and startups across multiple
            industries.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-5 shadow">
          <h3 className="!text-5xl md:text-3xl font-semibold text-center">
            📄 One-Click Applications
          </h3>
          <p className="text-gray-800 mt-2 text-6xl md:text-3xl">
            Apply easily with your saved resume and profile in just a single
            click.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-5 shadow">
          <h3 className="!text-5xl md:text-3xl font-semibold text-center">
            🚀 Personalized Recommendations
          </h3>
          <p className="text-gray-800 mt-2 text-6xl md:text-3xl">
            Get matched with jobs based on your skills, experience, and
            interests.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-5 shadow min-h-[300px]">
          <h3 className="!text-5xl md:text-3xl font-semibold text-center">
            📝 Resume Builder
          </h3>
          <p className="text-gray-800 mt-2 text-6xl md:text-3xl">
            Create a professional resume in minutes using our easy-to-use
            builder.
          </p>
        </div>
      </section>
      {/* Top Job Categories */}
      <section className="bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="!text-5xl md:text-2xl font-bold mb-4">
            Top Job Categories
          </h2>
          <div className="flex flex-wrap gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 text-gray-100 px-4 p-4 rounded-full  text-3xl font-medium"
              >
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Platform Stats */}
      <section className="bg-indigo-200 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-6 text-center">
          <div className="">
            <h3 className="!text-4xl font-bold text-blue-600">5K+</h3>
            <p className="text-black text-4xl">Jobs Posted</p>
          </div>
          <div>
            <h3 className="!text-4xl font-bold text-blue-600">10K+</h3>
            <p className="text-black text-4xl">Registered Users</p>
          </div>
          <div>
            <h3 className="!text-4xl font-bold text-blue-600">1K+</h3>
            <p className="text-black text-4xl">Companies Hiring</p>
          </div>
          <div>
            <h3 className="!text-4xl font-bold text-blue-600">4.9⭐</h3>
            <p className="text-black text-4xl">User Rating</p>
          </div>
        </div>
      </section>
      <div>
        <footer className="bg-gray-900 text-white mt-10">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-3 md:grid-cols-3 gap-6">
            {/* Column 1: Logo & About */}
            <div>
              <h2 className="text-2xl font-bold mb-2">NpJobPortal</h2>
              <p className="text-3xl text-gray-400">
                Your trusted platform for finding jobs, hiring talent, and
                growing careers. Easy, reliable, and fast!
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-gray-300 text-4xl md:text-xl">
                <li>
                  <a href="/" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/jobs" className="hover:text-blue-400">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400 text-4xl">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-400 text-4xl">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-400 text-4xl">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="hover:text-blue-400 text-4xl">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-800">
            &copy; {new Date().getFullYear()} NpJobPortal. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
