import React from 'react';

const EMIDetails = () => {
    return (
        <div className="container p-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">Manipal University Online EMI Details</h1>
            <p className="text-gray-700 mb-6 text-center sm:text-left">
                Here at Online Manipal, students are offered no-cost EMI options for paying their course and study fee. These easy-to-pay EMI options help the student ease their financial burden and make it easier to finance your education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                    View EMI Details
                </button>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                    Apply for Loan
                </button>
            </div>
        </div>
    );
};

export default EMIDetails;
