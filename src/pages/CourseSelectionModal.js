import React, { useState } from "react";
import { X } from "lucide-react";

// Importing all specialization modals
import BBAModel from "./specializations/BBAModel";
import BCAModel from "./specializations/BCAModel";
import BComModel from "./specializations/BComModel";
import MBAModel from "./specializations/MBAModel";
import BAModel from "./specializations/BAModel"; // Default modal for "Next"
import MComModel from "./specializations/MComModel";
import MCAModel from "./specializations/MCAModel";
import MAModel from "./specializations/MAModel";

const CourseSelectionModal = ({ onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNextModal, setShowNextModal] = useState(false);

  // Course list with linked specialization modals
  const courses = [
    { name: "Online B.Com", logo: "/Online_BCom.svg", modalComponent: BComModel },
    { name: "Online M.Com", logo: "/Online_M.Com.svg", modalComponent: MComModel },
    { name: "Online BBA", logo: "/itbank.svg", modalComponent: BBAModel },
    { name: "Online BCA", logo: "/Online_BCA.svg", modalComponent: BCAModel },
    { name: "Online MCA", logo: "/Online_MCA.svg", modalComponent: MCAModel },
    { name: "Online MA", logo: "/Online_MA.svg", modalComponent: MAModel },
    { name: "Online MBA", logo: "/Online_MBA.svg", modalComponent: MBAModel },
  ];

  // Handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  // Handle next button click
  const handleNext = () => {
    setShowNextModal(true);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
        {/* Modal Container */}
        <div className="bg-white w-full h-full sm:w-[90%] sm:h-[90%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[70%] xl:w-[60%] xl:h-[60%] max-w-full max-h-full rounded-lg shadow-lg overflow-hidden relative p-4 sm:p-8 md:p-10 flex flex-col justify-between">
          {/* Logo */}
          <img
            src="/logo.webp"
            alt="Logo"
            className="absolute top-4 left-4 w-16 sm:w-20 lg:w-24"
          />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
            onClick={onClose}
          >
            <X size={28} />
          </button>

          {/* Heading */}
          <div className="bg-gray-100 w-full py-4 rounded-md">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-center">
              Select Your Course
            </h2>
          </div>

          {/* Course Selection Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full mt-4 mx-auto overflow-y-auto flex-grow">
            {courses.map((course) => (
              <div
                key={course.name}
                className="border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
                onClick={() => handleCourseSelect(course)}
              >
                <img
                  src={course.logo}
                  alt={`${course.name} logo`}
                  className="mb-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                />
                <span className="text-xs sm:text-sm lg:text-base text-center">{course.name}</span>
              </div>
            ))}
          </div>

          {/* Next Button (Fixed at the bottom) */}
          <div className="mt-6 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
            <button
              className="w-full h-12 sm:h-14 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base lg:text-lg"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Course-Specific Modal */}
      {showModal && selectedCourse?.modalComponent && (
        <selectedCourse.modalComponent onClose={() => setShowModal(false)} />
      )}

      {/* Default Modal for Next Button */}
      {showNextModal && <BAModel onClose={() => setShowNextModal(false)} />}
    </>
  );
};

export default CourseSelectionModal;
