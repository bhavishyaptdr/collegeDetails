import React from "react";
import { Star, CheckCircle } from "lucide-react";

const approvals = ["UGC", "AICTE", "NIRF", "WES", "NAAC A+", "QS World University Rankings", "NBA"];

const ReviewSummary = () => {
  return (
    <div className="container max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manipal University Online</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <div className="text-4xl font-bold text-blue-600">4.3</div>
          <h3 className="text-lg font-semibold">Student Reviews</h3>
          <p className="text-gray-500">4.3 out of 5</p>
          <div className="flex justify-center gap-1 my-2">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
          </div>
          <p className="text-gray-500">Get the real statistics of daily visitors</p>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg flex items-center gap-2 mx-auto">
            Proceed to University →
          </button>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Provided by CV</p>
            <h3 className="text-lg font-bold">CV Education Loan Support <CheckCircle className="w-4 h-4 text-green-500 inline" /></h3>
            <ul className="text-sm text-gray-600 list-disc pl-4 mt-2">
              <li>20+ Lenders</li>
              <li>Sanctioned in less than 24 hours</li>
              <li>No Bank Visit</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Provided by CV</p>
            <h3 className="text-lg font-bold">CV Placement Support <CheckCircle className="w-4 h-4 text-green-500 inline" /></h3>
            <p className="text-sm text-gray-600">Get Placement opportunities & internship opportunities from 3000+ companies</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold">Approvals <CheckCircle className="w-4 h-4 text-green-500 inline" /></h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {approvals.map((approval, index) => (
            <span key={index} className="bg-green-200 text-green-800 px-2 py-1 rounded-lg text-sm">{approval}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
