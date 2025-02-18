import React, { useState } from "react";
import CourseCard from "./CourseCard";
import ComparisonTable from "./ComparisonTable";
import FilterSidebar from "./FilterSidebar";
import { courses, universities } from "./data"; // Import the data

const HomePage = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  const toggleCompare = (course) => {
    if (selectedCourses.some((c) => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
      setSelectedUniversities(selectedUniversities.filter((u) => u.name !== course.name));
    } else if (selectedCourses.length < 3) {
      const university = universities.find((u) => u.name === course.name);
      if (university) {
        setSelectedCourses([...selectedCourses, course]);
        setSelectedUniversities([...selectedUniversities, university]);
      }
    }
    setIsModalOpen(true);
  };

  const removeCourse = (id) => {
    setSelectedCourses(selectedCourses.filter((c) => c.id !== id));
    setSelectedUniversities(selectedUniversities.filter((u) => u.id !== id));
  };

  const handleAddMore = () => {
    setShowFilterSidebar(true);
    setIsModalOpen(false);
  };

  const handleCompareNow = () => {
    setShowComparisonTable(true);
    setIsModalOpen(false);
  };

  const handleBackToCourses = () => {
    setShowComparisonTable(false);
    setSelectedCourses([]);
    setSelectedUniversities([]);
  };

  return (
    <div className="p-4">
      {!showComparisonTable ? (
        <>
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">EXPLORE BEST COURSES FROM TOP UNIVERSITIES</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onCompare={toggleCompare} />
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Select University(s) to Compare</h2>
                <button className="text-white text-2xl" onClick={() => setIsModalOpen(false)}>✖</button>
              </div>

              <div className="flex gap-4 overflow-x-auto">
                {selectedCourses.map((course) => (
                  <div key={course.id} className="bg-gray-100 text-black p-4 rounded-lg flex flex-col items-center relative w-1/3">
                    <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-full" />
                    <p className="text-center font-semibold mt-2">{course.name}</p>
                    <button
                      className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs"
                      onClick={() => removeCourse(course.id)}
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>

              <button
                className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600"
                onClick={handleCompareNow}
              >
                Compare Now
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <ComparisonTable selectedUniversities={selectedUniversities} removeUniversity={removeCourse} />
          <button className="mt-4 w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800"
            onClick={handleBackToCourses}>
            Back to Courses
          </button>
        </>
      )}

      {showFilterSidebar && <FilterSidebar />}
    </div>
  );
};

export default HomePage;
