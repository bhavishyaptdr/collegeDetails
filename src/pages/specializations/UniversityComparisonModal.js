import React, { useState } from "react";
import { X } from "lucide-react";

const UniversityComparisonModal = ({ onClose }) => {
  const [universities, setUniversities] = useState([
    { name: "Manipal University Online", fee: "₹ 35,000/Sem", rating: 4.3, reviews: 857 },
    { name: "Vivekananda Global University Online", fee: "₹ 16,000/Sem", rating: 4.3, reviews: 259 },
  ]);

  const [newUniversity, setNewUniversity] = useState("");

  const handleAddUniversity = () => {
    if (newUniversity) {
      setUniversities([...universities, { name: newUniversity, fee: "", rating: "", reviews: "" }]);
      setNewUniversity("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-2xl md:max-w-3xl lg:max-w-4xl p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
          onClick={onClose}
        >
          <X size={28} />
        </button>

        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Add University to Compare</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {universities.map((university, index) => (
            <div key={index} className="border rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">{university.name}</h3>
                <p className="text-gray-700">{university.fee}</p>
                <p className="text-gray-600 text-sm">{university.rating} ⭐ ({university.reviews} Reviews)</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 mt-2 self-end"
                onClick={() => setUniversities(universities.filter((_, i) => i !== index))}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Placeholder for adding a new university */}
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
            <input
              type="text"
              value={newUniversity}
              onChange={(e) => setNewUniversity(e.target.value)}
              placeholder="Add a university"
              className="border border-gray-300 rounded-lg p-2 mb-2 w-full text-sm sm:text-base"
            />
            <button
              className="bg-blue-600 text-white rounded-lg px-4 py-2 w-full text-sm sm:text-base"
              onClick={handleAddUniversity}
            >
              Add To Compare
            </button>
          </div>
        </div>

        <button
          className="w-full bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition text-lg"
        >
          Compare Now
        </button>
      </div>
    </div>
  );
};

export default UniversityComparisonModal;
