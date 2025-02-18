import React, { useState } from "react";
import { Star, CheckCircle } from "lucide-react";
import ModelForm from "./ModelForm"; // Import the ModelForm component
import Review from "./Review";

const reviews = [
  { stars: 5, percentage: 64 },
  { stars: 4, percentage: 23 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 7 },
];

const userReviews = [
  {
    name: "Ramandeep Kaur",
    course: "BCA in Computer Science",
    date: "February 5, 2025",
    rating: 5,
    review:
      "LMS Quality, EMI Facility, Faculty Support, Value For Money, Student Support. LMS Quality Support from facility, good guidance and help, knowledgeable teachers, easy to use LMS with good user interface.",
  },
  {
    name: "Saurav Kumar Suman",
    course: "BBA",
    date: "February 5, 2025",
    rating: 3,
    review:
      "EMI Facility, LMS Quality, Student Support, Faculty Support, Value For Money. Manipal University Jaipur is generally positive, highlighting its good infrastructure, vibrant campus life, and decent placement opportunities.",
  },
  {
    name: "Dhruwati",
    course: "B.COM {UG Course}",
    date: "February 4, 2025",
    rating: 5,
    review:
      "Value For Money yes, I said it is value for money because all teachers and even all the mentors were so amazing. I don't have words for them and their teaching skills because when they end the session, I don't have any doubt they clear each and everything in the session and they always try to give their best. I just want to say thanks to College Vidya for suggesting me the best university for B.COM. I also want to thank MANIPAL UNIVERSITY for providing such a fabulous team of teachers who are always there to help us. !!THANK YOU!!",
  },
  {
    name: "Dhruwati",
    course: "B.COM {UG Course}",
    date: "February 4, 2025",
    rating: 5,
    review:
      "Value For Money yes, I said it is value for money because all teachers and even all the mentors were so amazing. I don't have words for them and their teaching skills because when they end the session, I don't have any doubt they clear each and everything in the session and they always try to give their best. I just want to say thanks to College Vidya for suggesting me the best university for B.COM. I also want to thank MANIPAL UNIVERSITY for providing such a fabulous team of teachers who are always there to help us. !!THANK YOU!!",
  },
  {
    name: "Dhruwati",
    course: "B.COM {UG Course}",
    date: "February 4, 2025",
    rating: 5,
    review:
      "Value For Money yes, I said it is value for money because all teachers and even all the mentors were so amazing. I don't have words for them and their teaching skills because when they end the session, I don't have any doubt they clear each and everything in the session and they always try to give their best. I just want to say thanks to College Vidya for suggesting me the best university for B.COM. I also want to thank MANIPAL UNIVERSITY for providing such a fabulous team of teachers who are always there to help us. !!THANK YOU!!",
  },
  {
    name: "Ramandeep Kaur",
    course: "BCA in Computer Science",
    date: "February 5, 2025",
    rating: 5,
    review:
      "LMS Quality, EMI Facility, Faculty Support, Value For Money, Student Support. LMS Quality Support from facility, good guidance and help, knowledgeable teachers, easy to use LMS with good user interface.",
  },
  {
    name: "Saurav Kumar Suman",
    course: "BBA",
    date: "February 5, 2025",
    rating: 3,
    review:
      "EMI Facility, LMS Quality, Student Support, Faculty Support, Value For Money. Manipal University Jaipur is generally positive, highlighting its good infrastructure, vibrant campus life, and decent placement opportunities.",
  },
];


const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [showModel, setShowModel] = useState(false);

  const handleButtonClick = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div className="container max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left" id="review-section">
        Manipal University Online Reviews
      </h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Student Reviews</h3>
        <div className="flex items-center gap-2 text-yellow-500">
          <span className="text-xl font-bold">4.3 out of 5</span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-500">(857)</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-12">
              <Star className="text-gray-400" size={20} /> star
            </span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: `${review.percentage}%` }}></div>
            </div>
            <span className="w-8 text-right">{review.percentage}%</span>
          </div>
        ))}
      </div>

      <button
        className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600"
        onClick={() => handleButtonClick("Write a review")}
      >
        Write a review
      </button>

      <div className="mt-6 space-y-4">
        {userReviews.map((user, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold flex items-center gap-2">
                  {user.name} <CheckCircle className="w-4 h-4 text-green-500" />{" "}
                  <span className="text-orange-500 font-semibold">Verified</span>
                </p>
                <p className="text-sm text-gray-500">{user.course}</p>
                <p className="text-sm text-gray-400">Reviewed in India on {user.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < user.rating ? "text-yellow-500" : "text-gray-300"}`}
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-700 text-sm mt-2">{user.review}</p>
            <div className="flex items-center gap-4 mt-2">
              <button
                className="border px-3 py-1 rounded-lg text-black hover:bg-gray-200"
                onClick={() => handleButtonClick("Helpful")}
              >
                Helpful
              </button>
              <button
                className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-200"
                onClick={() => handleButtonClick("Report")}
              >
                Report
              </button>
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleButtonClick("Reply")}
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowModel(true)}
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600"
      >
        View All Reviews
      </button>

      {showModel && <Review onClose={() => setShowModel(false)} isOpen={showModel} />}

      {showForm && <ModelForm formType={formType} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default ReviewSection;
