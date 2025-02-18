import React from 'react';

const InfoCards = () => {
    const infoList = [
        { text: "Now, Get admission twice a year, in July/August and January/February. Latest Notice by UGC,", link: "./ugc-announces-admissions-in-2-academic-sessions.pdf" },
        { text: "UGC updated the list of approved Online programs for the academic batch of 2024-25,", link: "./new-entitled-heis-for-online-2024.pdf" },
        { text: "Precautions to be taken by the students before enrolling for programs offered under ODL & Online Learning Mode,", link: "./ugc_public-notice-precautions-odl-19-march-2024.pdf" },
        { text: "A degree obtained through ODL mode is equivalent to a traditional degree,", link: "./ugc-notice-equivalence-of-desree.pdf" },
        { text: "To verify the authenticity of Manipal University Online", link: "./manipal-hei.pdf" },
        { text: "UGC declares a 100% Fee Refund policy for students within a specified period by universities.", link: "./fee-refund-policy-2023-1.pdf" },
        { text: "UGC issues a public notice regarding misleading abbreviations in the names of Universities & Colleges.", link: "./ugc-public-notice-of-misleading-abbreviation.pdf" }
    ];

    return (
        <div className="bg-gray-100 py-10 flex justify-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Important Announcements</h1>
                <div className="space-y-4">
                    {infoList.map((info, index) => (
                        <div key={index} className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-lg shadow-md text-gray-800">
                            <span>{info.text}</span>
                            <a href={info.link} className="text-blue-600 font-bold ml-1 hover:underline">Click here</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoCards;
