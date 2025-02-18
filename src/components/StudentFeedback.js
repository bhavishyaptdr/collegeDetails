import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StudentFeedbacks = [
  {
    name: "Madona Khanna",
    course: "ONLINE BCA",
    image: "/manipal-online-testimonial-madona.jpg",
    review: "I was able to pursue my dream online BCA degree through Manipal University Jaipur's scholarship. With the online degree program from MUJ, attending online classes and lectures on weekends has made it easier to manage my work and other household responsibilities along with my studies.",
  },
  {
    name: "Niva Mohanty",
    course: "MIM",
    image: "/Niva_Mohanty-Testimonial-manipal.jpg",
    review: "My teachers are my mentors. They have helped me grow academically and personally.",
  },
  {
    name: "Meghana Manjunath",
    course: "MIM",
    image: "/Meghana_Manjunath-Testimonial-manipal.jpg",
    review: "MAHE has provided a great platform for all students to explore themselves - personally and professionally.",
  },
];

const StudentFeedback = () => {
  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const visibleSlides = window.innerWidth >= 1024 ? 3 : 1; // Show 3 on large screens, 1 on small screens

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? StudentFeedbacks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === StudentFeedbacks.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container p-6 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">What Students Say</h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-4 overflow-hidden w-full justify-center">
          {StudentFeedbacks.slice(index, index + visibleSlides).map((feedback, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg w-80 mx-auto transition-all duration-500 ease-in-out">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">{feedback.name}</h3>
                <p className="text-blue-600 font-medium mt-1">{feedback.course}</p>
                <p className="text-gray-600 mt-2">
                  {isExpanded ? feedback.review : `${feedback.review.slice(0, 100)}... `}
                  <button
                    className="text-blue-500"
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : i)
                    }
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </p>
              </div>
            );
          })}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default StudentFeedback;
