import React from 'react';
import InfoCards from '../components/InfoCards';

const AdmissionProcess = () => {
    return (
        <div className="container p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center sm:text-4xl">Manipal University Online Admission Process</h1>
            <p className="text-gray-700 mb-4 text-center sm:text-lg">
                In online Manipal University, the admission process takes place in online mode. Fresh admission starts in January of every year. There are direct admissions, no entrance exam is conducted for the admission process. The admission procedure for 2025 for the online courses at Online Manipal University is as follows:
            </p>
            <div className="space-y-6">
                <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold p-2 rounded-md whitespace-nowrap">
                     Step 1-
                </div>

                    <p className="ml-4 text-sm sm:text-base">Visit the official website of Online Manipal University and apply online by clicking on “Enroll Now”.</p>
                </div>
                <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 font-bold p-2 rounded-md whitespace-nowrap">Step 2-</div>
                    <p className="ml-4 text-sm sm:text-base">Upload the documents and then submit the application.</p>
                </div>
                <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 font-bold p-2 rounded-md whitespace-nowrap">Step 3-</div>
                    <p className="ml-4 text-sm sm:text-base">Pay the application fee. This fee is later adjusted in the Semester 1 fees.</p>
                </div>
                <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 font-bold p-2 rounded-md whitespace-nowrap">Step 4-</div>
                    <p className="ml-4 text-sm sm:text-base">An admission counselor will reach out to you if any other procedure is pending and will assist you till the completion of the entire process.</p>
                </div>
            </div>
            <InfoCards />
        </div>
    );
};

export default AdmissionProcess;
