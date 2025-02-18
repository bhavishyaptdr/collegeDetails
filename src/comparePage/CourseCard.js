import React from "react";

const CourseCard = ({ course, onCompare }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{course.name}</h2>
      <p className="text-gray-600">Total Courses: {course.totalCourses}</p>
      <button
        onClick={() => onCompare(course)}
        className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
      >
        Add to Compare
      </button>
    </div>
  );
};

export default CourseCard;
