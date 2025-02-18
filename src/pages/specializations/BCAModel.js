import React, { useState } from "react";
import { X } from "lucide-react";
import UniversityComparisonModal from "./UniversityComparisonModal";

const BCAModel = ({ onClose, onSelectSpecialization }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  const specializations = [
    { name: "Not Decided Yet", icon: "/ndyet.svg" },
    { name: "Multimedia and Animation", icon: "/ug-icon.png" },
    { name: "General", icon: "/ug-icon.png" },
    { name: "Data Science and Analytics", icon: "/pg-icon.png" },
    { name: "Banking and Insurance", icon: "/banking_insurance.svg" },
    { name: "Cloud Computing", icon: "/Cloud_Computing.svg" },
    { name: "Cyber Security", icon: "/cyber-security.png" },
  ];

  // Function to handle specialization selection
  const handleSelectSpecialization = (specialization) => {
    setSelectedSpecialization(specialization);
    setIsModalOpen(true); // Open modal automatically when specialization is clicked
  };

  // Function to handle "Compare" button click
  const handleCompareClick = () => {
    if (!selectedSpecialization) {
      alert("Please select a specialization first!");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white w-full h-full flex flex-col relative overflow-hidden">
          {/* Top Fixed Section */}
          <div className="w-full flex items-center justify-between p-4 sm:p-6 bg-white shadow-md fixed top-0 z-10">
            <img src="/logo.webp" alt="Logo" className="w-20 sm:w-24 lg:w-28" />
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-center flex-1">
              Select Your Specialization
            </h2>
            <button className="text-gray-500 hover:text-gray-700 transition-all" onClick={onClose}>
              <X size={28} />
            </button>
          </div>

          {/* Scrollable Specializations List */}
          <div className="mt-20 flex-grow overflow-y-auto w-full px-4 sm:px-6 pb-20">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 w-full max-w-5xl mx-auto">
              {specializations.map((specialization) => (
                <div
                  key={specialization.name}
                  className={`border border-gray-300 rounded-lg flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer transition-all duration-200 ${
                    selectedSpecialization?.name === specialization.name
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                  onClick={() => handleSelectSpecialization(specialization)}
                >
                  <img
                    src={specialization.icon}
                    alt={`${specialization.name} icon`}
                    className="mb-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <span className="text-xs sm:text-sm lg:text-base text-center">
                    {specialization.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Fixed Buttons */}
          <div className="w-full p-4 sm:p-6 bg-white shadow-md flex justify-between fixed bottom-0 z-10">
            <button
              className="w-1/2 px-4 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              onClick={onClose}
            >
              Previous
            </button>
            <button
              className="w-1/2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={handleCompareClick}
            >
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* University Comparison Modal */}
      {isModalOpen && (
        <UniversityComparisonModal
          onClose={() => setIsModalOpen(false)}
          selectedSpecialization={selectedSpecialization} // Pass selected specialization to modal
        />
      )}
    </>
  );
};

export default BCAModel;
