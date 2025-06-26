import React from "react";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <h3 className="text-center p-3">this is Home page</h3>
      <div className="w-full bg-blue-300 py-5 p-3">
        <h1 className="text-3xl font-bold">Find Your Dream Job Today</h1>
        <p className="text-gray-700">
          Explore thousands of verified job listings across industries and
          connect with top recruiters.
        </p>
      </div>
      <div>
        <footer className="bg-gray-900 text-white mt-10">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Logo & About */}
            <div>
              <h2 className="text-2xl font-bold mb-2">JobPortal</h2>
              <p className="text-sm text-gray-400">
                Your trusted platform for finding jobs, hiring talent, and
                growing careers. Easy, reliable, and fast!
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
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
                <a href="#" className="hover:text-blue-400 text-xl">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="hover:text-blue-400 text-xl">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-800">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
