import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sidebar menu items
const menuItems = [
  { name: "About", path: "/about" },
  { name: "Approvals", path: "/approvals" },
  { name: "Courses", path: "/courses" },
  { name: "Jobs & Internships", path: "/jobs-internships" },
  { name: "Sample Certificate", path: "/sample-certificate" },
  { name: "Education Loan/EMI", path: "/education-loan-emi" },
  { name: "Admission Open 2025", path: "/admission-2025" },
  { name: "Examination Pattern", path: "/examination-pattern" },
  { name: "Placement Partners", path: "/placement-partners" },
  { name: "Faculty", path: "/faculty" },
  { name: "FAQs", path: "/faqs" },
  { name: "Blog/Video", path: "/blog-video" },
  { name: "Other Universities", path: "/other-universities" },
  { name: "Testimonials/Reviews", path: "/testimonials-reviews" },
  { name: "Summary", path: "/summary" },
];

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Sidebar for Large Screens (Fixed on Left) */}
      <div className="hidden md:block w-64 h-screen bg-gray-100 shadow-lg p-4 fixed top-0 left-0">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition">
              <Link to={item.path} className="text-gray-700 font-medium">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar for Small Screens (Row Format) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-100 shadow-lg p-3 flex justify-between items-center z-50">
        {/* Show the first 4 items in the row */}
        <div className="flex space-x-4 overflow-x-auto w-full">
          {menuItems.slice(0, 4).map((item, index) => (
            <Link key={index} to={item.path} className="text-gray-700 font-medium flex-shrink-0">
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleSidebar} className="text-gray-700 font-bold text-xl">
          <FaBars />
        </button>
      </div>

      {/* Full-Screen Sidebar for Small Screens when clicked */}
      {isSidebarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="w-64 h-screen bg-white shadow-lg p-4 overflow-y-auto fixed left-0 top-0">
            {/* Close Button */}
            <button className="absolute top-3 right-3 text-gray-600" onClick={toggleSidebar}>
              <FaTimes size={20} />
            </button>

            {/* Menu Items */}
            <ul className="space-y-2 mt-8">
              {menuItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                  <Link to={item.path} className="text-gray-700 font-medium" onClick={toggleSidebar}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
