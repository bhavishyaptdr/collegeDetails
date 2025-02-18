import React from 'react';

const ExamPattern = () => {
  const openPDF = () => {
    window.open(process.env.PUBLIC_URL + '/page1.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">
          Manipal University Online Examination Pattern
        </h1>
        <p className="text-gray-700 text-center mb-6 leading-relaxed">
          Manipal University conducts online exams that are remotely proctored through their enhanced digital learning platform.
        </p>
        <div className="text-center">
          <button
            onClick={openPDF}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            View Full Examination Pattern
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExamPattern;
