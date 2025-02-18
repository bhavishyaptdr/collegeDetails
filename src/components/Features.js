// src/components/Features.jsx
import React from 'react';

const features = [
    {
        title: "Real-World Mentors →",
        description: "The faculty includes experienced professors along with industry practitioners as mentors.",
        bgColor: "bg-yellow-100",
    },
    {
        title: "Industry Connect →",
        description: "Manipal University has connections with 100+ recruiters from Fortune 500 companies.",
        bgColor: "bg-orange-100",
    },
    {
        title: "Easy Financing Options →",
        description: "There are options of No-Cost EMI & attractive scholarships for various categories.",
        bgColor: "bg-yellow-100",
    },
];

const Features = () => {
    return (
        <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
                <div key={index} className={`${feature.bgColor} p-6 rounded-lg shadow-md`}>
                    <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Features;
