import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse1.webp",
    title: "Online B.Com",
    description: "Bachelor of Commerce",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse2.webp",
    title: "Online M.Com",
    description: "Master of Commerce",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse3.webp",
    title: "Online BBA",
    description: "Bachelor of Business Administration",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse4.webp",
    title: "Online BCA",
    description: "Bachelor of Computer Applications",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse5.webp",
    title: "Online MCA",
    description: "Master of Computer Applications",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse6.webp",
    title: "Online MA",
    description: "Master of Arts",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse7.webp",
    title: "Online MBA",
    description: "Master of Business Administration",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse8.webp",
    title: "Online MBA(Dual)",
    description: "Master of Business Administration with a dual specialization",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse9.webp",
    title: "Distance MBA",
    description: "Distance Master of Business Administration",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse10.webp",
    title: "Online BA",
    description: "Bachelor of Arts",
    link: "#"
  },
  {
    logo: "/manipal-online-university-logo.png",
    image: "/ucourse11.webp",
    title: "B.Tech",
    description: "Bachelor of Technology",
    link: "#"
  }
];

const CourseCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Responsive handling
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - itemsToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= courses.length - itemsToShow ? 0 : prev + 1));
  };

  return (
    <div className="container relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
      <div className="md:text-right xs">
        <h1 className="text-xl font-bold">Courses Provided</h1>
      </div>
      <div className="flex justify-end w-full mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Cards Container with Sliding Effect */}
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className={`transition-transform duration-500 ease-in-out transform ${
            !viewAll ? `translate-x-${-currentIndex * 300}px` : ""
          }`}
        >
          {!viewAll ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {courses
                .slice(currentIndex, currentIndex + itemsToShow)
                .map((course, index) => (
                  <div
                    key={index}
                    className={`bg-white shadow-lg rounded-lg overflow-hidden w-[300px] transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      index === 1 && itemsToShow === 3 ? "hover:scale-105" : ""
                    }`}
                  >
                    {/* Image with Logo Overlay */}
                    <div className="relative">
                      <img
                        src={course.image}
                        alt="Course Banner"
                        className="w-full h-60 object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded">
                        <img src={course.logo} alt="Logo" className="h-8" />
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="p-4">
                      <h3 className="text-gray-700 text-sm uppercase tracking-wide">
                        MANIPAL UNIVERSITY ONLINE
                      </h3>
                      <h2 className="text-lg font-bold">{course.title}</h2>
                      <p className="text-gray-600">{course.description}</p>
                      <a
                        href={course.link}
                        className="text-blue-600 font-medium mt-2 inline-block"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Image with Logo Overlay */}
                  <div className="relative">
                    <img
                      src={course.image}
                      alt="Course Banner"
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded">
                      <img src={course.logo} alt="Logo" className="h-8" />
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-4">
                    <h3 className="text-gray-700 text-sm uppercase tracking-wide">
                      MANIPAL UNIVERSITY ONLINE
                    </h3>
                    <h2 className="text-lg font-bold">{course.title}</h2>
                    <p className="text-gray-600">{course.description}</p>
                    <a
                      href={course.link}
                      className="text-blue-600 font-medium mt-2 inline-block"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows (Hidden when "View All" is active) */}
      {!viewAll && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default CourseCardSlider;
