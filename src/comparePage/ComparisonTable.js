import React from "react";

const ComparisonTable = ({ selectedUniversities = [], removeUniversity }) => {
  if (!selectedUniversities || selectedUniversities.length === 0) {
    return <p className="text-center text-gray-500">No universities selected for comparison.</p>;
  }

  return (
    <div className="bg-white shadow-lg p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-4">University Comparison</h2>

      <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-3">Colleges</th>
            {selectedUniversities.map((university) => (
              <th key={university.id} className="border border-gray-300 p-3 text-center relative">
                <button
                  className="absolute top-1 right-2 text-red-500 text-xl"
                  onClick={() => removeUniversity(university.id)}
                >
                  ✖
                </button>
                <img src={university.image} alt={university.name} className="h-20 w-20 mx-auto mb-1 rounded-lg shadow-md" />
                <p className="font-bold">{university.name}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Approvals</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                {university.approvals}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Placements</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                <div className="grid grid-cols-3 gap-1 place-items-center">
                  {university.placements?.map((logo, index) => (
                    <div key={index} className="border rounded-lg p-1 shadow-md flex items-center justify-center">
                      <img src={logo} alt="Placement Logo" className="h-14 w-14 object-contain" />
                    </div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Education Mode</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                {university.educationMode}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Ranking</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                {university.ranking}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Examination Mode</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                {university.examinationMode}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Highest Placement</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                ₹ {university.highestPlacement}/Year
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Average Placement</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                ₹ {university.averagePlacement}/Year
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">Courses Offered</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                {university.courses}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-bold">EMI Options</td>
            {selectedUniversities.map((university) => (
              <td key={university.id} className="border border-gray-300 p-3 text-center">
                {university.EMIOptions}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
