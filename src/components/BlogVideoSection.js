import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    image: "/manipal-online-university-thumbnail.jpg",
    title: "Why choose Manipal University Online Education...",
    source: "My College Mentor",
    duration: "23:21 mins",
  },
  {
    id: 2,
    image: "/manipal-jaipur-demo-class1.webp",
    title: "Demo Class 1 - Manipal University Jaipur (MUJ)",
    source: "My College Mentor",
    duration: "3:09 mins",
  },
  {
    id: 3,
    image: "/manipal-jaipur-demo-class2.webp",
    title: "Demo Class 2 - Manipal University Jaipur (MUJ)",
    source: "My College Mentor",
    duration: "3:12 mins",
  },
];

const blogs = [
  {
    id: 1,
    image: "/manipal-online-bca-program-fees-review-admission.jpg",
    title: "Manipal University Online BCA Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 2,
    image: "/manipal-online-ma-in-jmc-program-fees-review-admission-2.jpg",
    title: "Manipal University Online MAJMC Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 3,
    image: "/manipal-online-bba-program-fees-review-admission-1.jpg",
    title: "Manipal University Online BBA Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 4,
    image: "/manipal-online-ma-in-bcom-program-fees-review-admission-1.jpg",
    title: "Manipal University Online BCom Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 5,
    image: "/manipal-online-university-mca-course-fees-1.jpg",
    title: "Manipal University Online MCA Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 6,
    image: "/manipal-online-university-mcom-course-fees-1.jpg",
    title: "Manipal University Online MCom Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 7,
    image: "/manipal-university-jaipu.jpg",
    title: "Manipal University Online MBA Review - Good or Bad, Worth It?",
    Date: "February 24, 2024",
  },
  {
    id: 8,
    image: "/manipal-online-university-courses-fees-1.jpg",
    title: "How Does Manipal University Online Works? - A Complete Guide",
    Date: "February 24, 2024",
  },
  {
    id: 9,
    image: "/online-manipal-good-or-bad.jpg",
    title: "Is Manipal University Online Good or Bad? - Full Review and Facts",
    Date: "February 24, 2024",
  },
];

const BlogVideoSection = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const data = activeTab === "video" ? videos : blogs;

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth >= 1024 ? 3 : 1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - itemsToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= data.length - itemsToShow ? 0 : prev + 1));
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">Blog/Video</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("video")}
          className={`px-4 py-2 text-lg ${activeTab === "video" ? "text-blue-600 border-b-2 border-blue-600 font-bold" : "text-gray-500"}`}
        >
          Video
        </button>
        <button
          onClick={() => setActiveTab("blog")}
          className={`px-4 py-2 text-lg ${activeTab === "blog" ? "text-blue-600 border-b-2 border-blue-600 font-bold" : "text-gray-500"}`}
        >
          Blog
        </button>
      </div>

      {/* Slider */}
      <div className="relative flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white shadow p-2 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex overflow-hidden space-x-4 w-full justify-center">
          {data.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg w-80 p-4 transform transition-all hover:scale-105 hover:shadow-2xl">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="font-bold text-lg mt-3">{item.title}</h3>
              {activeTab === "blog" && (
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              )}
              <button className="mt-3 text-blue-500 font-semibold text-sm">Read More</button>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white shadow p-2 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BlogVideoSection;
