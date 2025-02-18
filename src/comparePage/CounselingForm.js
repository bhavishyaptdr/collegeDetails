import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CounselingForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    dob: "",
    course: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    onClose(); // Close modal after submission
    navigate("/compare"); // Redirect to /compare
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Modal Content */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-orange-600 mb-6">
          Connect with My College Mentor for Free Education Counseling
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="+91 Your Contact Number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">University</label>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select University</option>
              <option value="Delhi University">Delhi University</option>
              <option value="NIT Raipur">NIT Raipur</option>
              <option value="IIT Bombay">IIT Bombay</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-3 rounded hover:bg-orange-700 transition"
          >
            Get Free Counselling Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CounselingForm;
