import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const universities = [
  {
    id: 1,
    logo: "/mahe-manipal-academy-of-higher-education-logo.jpg",
    name: "MAHE Manipal Online",
    rating: 4,
    reviews: 296,
  },
  {
    id: 2,
    logo: "/Vignans-Foundation-For-Science-Technology-And-Research-logo.jpg",
    name: "Vignan University Online",
    rating: 4,
    reviews: 599,
  },
  {
    id: 3,
    logo: "/Mizoram_Online_University_logo.webp",
    name: "Mizoram University Online",
    rating: 3,
    reviews: 268,
  },
  {
    id: 4,
    logo: "/dy-patil-navi-mumbai-logo.webp",
    name: "DY Patil Vidyapeeth Navi Mumbai",
    rating: 4,
    reviews: 349,
  },
  {
    id: 5,
    logo: "/online-sastra-logo.webp",
    name: "Sastra University Online",
    rating: 4,
    reviews: 687,
  },
];

const UniversityCompare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
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
    setCurrentIndex((prev) => (prev === 0 ? universities.length - itemsToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= universities.length - itemsToShow ? 0 : prev + 1));
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Other Universities to Consider</h2>

      <div className="relative flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white shadow-md p-2 rounded-full top-1/2 transform -translate-y-1/2"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex overflow-hidden space-x-4 w-full justify-center">
          {universities.slice(currentIndex, currentIndex + itemsToShow).map((university, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex-shrink-0 w-full sm:w-[300px] md:w-[320px] lg:w-[350px] mx-2 flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-full flex justify-center mb-4">
                <img src={university.logo} alt={university.name} className="h-12 object-contain" />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">ONLINE UNIVERSITY</p>
              <h3 className="font-bold text-lg text-center mt-2">{university.name}</h3>
              <p className="text-sm text-center mt-2">Student Rating</p>
              <div className="flex justify-center items-center space-x-2 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < university.rating ? "text-yellow-500" : "text-gray-300"}>
                    &#9733;
                  </span>
                ))}
                <a href="#" className="text-blue-500 text-sm">({university.reviews} Reviews)</a>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">Add To Compare</button>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full top-1/2 transform -translate-y-1/2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default UniversityCompare;
