import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Download, MessageCircle } from "lucide-react";
import InfoPage from "./InfoPage"; // Import the InfoPage component
import ExpertImageModel from "./ExpertImageModel"; // Import the ExpertImageModel component
import ModelForm from "./ModelForm"; // Import the ModelForm component
import CounselingForm from "../comparePage/CounselingForm";
const media = [
  { type: "image", src: "/manipal-uni.jpg" },
  { type: "image", src: "/Manipal_2.webp" },
  { type: "image", src: "/mainipal2.jpeg" },
  { type: "video", src: "https://www.youtube.com/embed/j0_fWqaZPlg" }
];


const UniversityPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModel, setShowModel] = useState(false); // InfoModal
  const [showExpertModal, setShowExpertModal] = useState(false); // ExpertImageModal
  const [showFormModal, setShowFormModal] = useState(false); // FormModal
  const [showCounselingModal, setShowCounselingModal] = useState(false); //CourseSelectionModal

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Media Section */}
          <div className="relative w-full lg:w-1/2">
            <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
              {media[currentIndex].type === "image" ? (
                <img src={media[currentIndex].src} alt="Slide" className="w-full h-full object-cover" />
              ) : (
                <iframe className="w-full h-full" src={media[currentIndex].src} title="YouTube video" allowFullScreen></iframe>
              )}
            </div>
            <button className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white bg-opacity-50 p-2 rounded-full" onClick={prevSlide}>
              <ChevronLeft size={28} />
            </button>
            <button className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white bg-opacity-50 p-2 rounded-full" onClick={nextSlide}>
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Information Section */}
          <div className="w-full lg:w-1/2 p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Manipal University Online</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Accredited with grade A+ by NAAC</p>

            {/* Rating Section */}
            <div className="flex items-center space-x-1 mt-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="text-yellow-500" size={20} fill="currentColor" />
              ))}
              <Star className="text-gray-400" size={20} />
              <a href="#review-section" className="text-blue-500 scroll-smooth underline text-xs sm:text-sm">(857 Reviews)</a>
            </div>

            {/* Logos & Info Button */}
            <div className="flex items-center space-x-4 mt-4">
              <img src="/ugc-logo.jpg" alt="UGC" className="w-8 sm:w-10" />
              <img src="/aicte-logo.jpg" alt="AICTE" className="w-8 sm:w-10" />
              <img src="/nirf-logo.jpg" alt="NIRF" className="w-8 sm:w-10" />
              <button onClick={() => setShowModel(true)} className="p-2">
                <img src="/info.png" alt="Info" className="w-6 h-6" />
              </button>
            </div>

            {/* Apply Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base"
                onClick={() => setShowFormModal(true)} // Show the form modal on click
              >
                Apply to University →
              </button>
              <button
                className="flex items-center space-x-2 border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-100 transition text-sm sm:text-base"
                onClick={() => setShowFormModal(true)} // Show the form modal on click
              >
                <MessageCircle size={20} />
                Talk to University
              </button>
            </div>

            {/* Compare & Download Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
            <button

              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
              onClick={() => setShowCounselingModal(true)} >
            + Add to Compare
              </button>
               {/* CounselingForm Modal */}
              {showCounselingModal && <CounselingForm onClose={() => setShowCounselingModal(false)} />}

              <button
                className="flex items-center space-x-2 text-blue-500 hover:underline text-sm sm:text-base"
                onClick={() => setShowFormModal(true)} // Show the form modal on click
              >
                <Download size={20} />
                Download Brochure
              </button>
            </div>

            {/* Mentorship Section */}
            <div className="mt-6">
              <p className="text-gray-600 text-sm sm:text-base">Not sure what you are looking for?</p>
              <div className="flex items-center space-x-3 mt-2">
                <div className="flex -space-x-3">
                  <img src="/mentor-1.png" alt="User" className="w-10 h-10 border rounded-full object-cover" />
                  <img src="/mentor-2.png" alt="User" className="w-10 h-10 border rounded-full object-cover" />
                  <img src="/mentor-3.png" alt="User" className="w-10 h-10 border rounded-full object-cover" />
                </div>
                <button
                  className="text-blue-600 font-medium text-lg flex items-center space-x-1"
                  onClick={() => setShowExpertModal(true)}
                >
                  <span>Let's Talk</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {showModel && <InfoPage onClose={() => setShowModel(false)} />}

      {/* Expert Image Modal */}
      {showExpertModal && <ExpertImageModel onClose={() => setShowExpertModal(false)} />}

      {/* Form Modal */}
      {showFormModal && <ModelForm onClose={() => setShowFormModal(false)} />}
    </div>
  );
};

export default UniversityPage;
