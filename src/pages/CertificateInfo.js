import React from 'react';

const CertificateInfo = () => {
    return (
        <div className="container flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            {/* Text Section */}
            <div className="flex-1 mb-6 md:mb-0 md:pr-6">
                <h1 className="text-2xl font-bold text-gray-800">Sample Certificate from Manipal University Online</h1>
                <p className="mt-2 text-gray-700">
                    Earn a UGC-entitled degree, recognized globally:
                </p>
                <ul className="mt-4 space-y-2">
                    {[
                        "Recognized and accredited degree",
                        "NAAC and AICTE approved degree",
                        "Degree recognized in both private and public sector",
                        "Equivalence to on-campus degree"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2">✔️</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
                <img
                    src="./manipal-university-sample--certificate.webp"
                    alt="Sample Certificate"
                    className="w-64 md:w-72 lg:w-80 rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default CertificateInfo;
