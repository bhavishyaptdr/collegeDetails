import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ModalForm = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Smooth fade-out before closing
  const handleClose = (e) => {
    if (e.target === e.currentTarget || e.type === "click") {
      setIsVisible(false);
      setTimeout(onClose, 300); // Delay closing for smooth animation
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose(e);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Box */}
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 relative z-10 transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Fixed Logo at the top */}
        <div className="absolute top-0 left-0 flex items-center justify-start py-4 px-4 bg-white border-b shadow-md w-full">
          <img src="./logo.webp" alt="Logo" className="w-20" />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all duration-200"
          onClick={handleClose}
        >
          <X size={28} />
        </button>

        {/* Form Title */}
        <h2 className="text-lg font-bold mb-4 mt-16 text-center">
          Already a User?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </h2>

        {/* Form Content with Scrolling Effect */}
        <div className="overflow-y-auto max-h-[65vh] px-2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded p-2"
            />

            <select className="w-full border rounded p-2">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input type="date" className="w-full border rounded p-2" />

            <div className="flex items-center">
              <span className="mr-2">+91</span>
              <input
                type="text"
                placeholder="Mobile Number"
                className="flex-1 border rounded p-2"
              />
            </div>
            <span className="text-green-500 text-sm">We don't spam</span>

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded p-2"
            />
            <span className="text-green-500 text-sm">We don't spam</span>

            <select className="w-full border rounded p-2">
              <option>Select a course</option>
              {/* Add your course options here */}
            </select>

            <select className="w-full border rounded p-2">
              <option>Select a state</option>
              {/* Add your state options here */}
            </select>

            <select className="w-full border rounded p-2">
              <option>Select a city</option>
              {/* Add your city options here */}
            </select>

            <select className="w-full border rounded p-2">
              <option>Select Subsidy Option</option>
            </select>
            <span className="text-yellow-500 font-bold">Upto ₹10,000</span>

            {/* Buttons - Responsive Layout */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
              <button className="w-full sm:w-auto px-4 py-2 text-white bg-orange-500 rounded">
                Compare on 30+ Factors!
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-white bg-blue-500 rounded">
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
