import { useState, useEffect } from "react";
import { X } from "lucide-react";

const experts = [
  {
    id: 1,
    image: "/mentor-1.png",
    experience: "MBA, 5 yr Exp",
    rating: 3,
    students: 2412,
  },
  {
    id: 2,
    image: "/mentor-2.png",
    experience: "M.Com, 4 yr Exp",
    rating: 4,
    students: 2134,
  },
  {
    id: 3,
    image: "/mentor-3.png",
    experience: "MBA, 10 yr Exp",
    rating: 4,
    students: 1789,
  },
  {
    id: 4,
    image: "/mentor-4.png",
    experience: "MCA, 8 yr Exp",
    rating: 3,
    students: 2209,
  },
  {
    id: 5,
    image: "/mentor-5.png",
    experience: "M.Com, 7 yr Exp",
    rating: 4,
    students: 1957,
  },
  {
    id: 6,
    image: "/mentor-6.png",
    experience: "Ph.D, 15 yr Exp",
    rating: 4,
    students: 1586,
  },
  {
    id: 7,
    image: "/mentor-7.png",
    experience: "MCA, 8 yr Exp",
    rating: 3,
    students: 2308,
  },
];

const ExpertImageModel = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 rounded-lg shadow-lg relative text-center transition-transform transform scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Expert Image Section */}
        <div className="relative flex justify-center mb-4">
          <div className="absolute w-36 h-52 sm:w-40 sm:h-56 bg-gray-100 rounded-lg shadow-md -rotate-6"></div>
          <div className="absolute w-36 h-52 sm:w-40 sm:h-56 bg-gray-300 rounded-lg shadow-md rotate-3"></div>
          <img
            src={experts[currentIndex].image}
            alt="Expert"
            className="relative w-36 h-52 sm:w-40 sm:h-56 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Expert Details */}
        <h3 className="font-semibold text-lg">{experts[currentIndex].experience}</h3>
        <div className="flex justify-center mt-1 text-yellow-400 text-lg">
          {"★".repeat(experts[currentIndex].rating)}
          {"☆".repeat(5 - experts[currentIndex].rating)}
        </div>

        <div className="mt-2 px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full inline-block text-sm">
          {experts[currentIndex].students}+ Students Counseled
        </div>

        {/* Info Section */}
        <div className="mt-4 text-center px-4">
          <h2 className="text-lg font-bold leading-tight">
            Get <span className="text-blue-600">Real Experts</span> on your side
          </h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Before seeking career counseling, answer a few questions so we can connect you with
            our best expert counselor for personalized guidance and mentorship.
          </p>
        </div>

        {/* Action Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default ExpertImageModel;
