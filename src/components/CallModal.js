import React, { useState } from "react";
import { X } from "lucide-react";

const CallModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center">
        {/* Main Card */}
        <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col md:flex-row items-center justify-between w-full max-w-3xl shadow-lg">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">
              Not sure what you are looking for?
            </h2>
            <p className="text-gray-300">
              Take a quick eligibility check to find programs that match your profile.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
          >
            Let's Talk →
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                <X size={20} />
              </button>

              <h3 className="text-lg font-semibold text-center">
                Just One Click To Call
              </h3>

              {/* Illustration */}
              <div className="flex justify-center my-4">
                <img
                  src="/lets_talk.png"
                  alt="Call Illustration"
                  className="w-40 h-auto"
                />
              </div>

              {/* Contact Info */}
              <p className="text-center text-blue-600 font-bold text-xl">
                +91 8085052705
              </p>
              <p className="text-center text-green-600 font-semibold mt-2">
                Hurry up! My College Mentor is ready to guide you.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CallModal;
