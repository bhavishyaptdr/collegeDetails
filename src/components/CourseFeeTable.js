// src/components/CourseFeeTable.jsx
import React from 'react';

const courses = [
    { name: "Online B.Com (1 Specialization Available)", fees: "₹99,000", duration: "3 Years", link: "#" },
    { name: "Online M.Com (1 Specialization Available)", fees: "₹1,08,000", duration: "2 Years", link: "#" },
    { name: "Online BBA (8 Specializations Available)", fees: "₹1,35,000", duration: "3 Years", link: "#" },
    { name: "Online BCA (5 Specializations Available)", fees: "₹1,35,000", duration: "3 Years", link: "#" },
    { name: "Online MCA (7 Specializations Available)", fees: "₹1,58,000", duration: "2 Years", link: "#" },
    { name: "Online MA (1 Specialization Available)", fees: "₹1,40,000", duration: "2 Years", link: "#" },
    { name: "Online MBA (16 Specializations Available)", fees: "₹1,75,000", duration: "2 Years", link: "#" },
    { name: "Online MBA (Dual) (2 Specializations Available)", fees: "₹1,75,000", duration: "2 Years", link: "#" },
    { name: "Distance MBA", fees: "₹1,75,000", duration: "2 Years", link: "#" },
    { name: "Online BA", fees: "₹75,000", duration: "3 Years", link: "#" },
    { name: "B.Tech", fees: "₹5,62,000", duration: "3 Years", link: "#" },
];

const CourseFeeTable = () => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-5">Course Wise Updated Fees 2025</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-2 border-r">Course</th>
                            <th className="px-4 py-2 border-r">Full Fees</th>
                            <th className="px-4 py-2">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <td className="px-4 py-2 border-r">
                                    <a href={course.link} className="text-blue-600 hover:underline">{course.name}</a>
                                </td>
                                <td className="px-4 py-2 border-r">{course.fees}</td>
                                <td className="px-4 py-2">{course.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseFeeTable;
