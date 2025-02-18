import React from 'react';

const CourseTable = () => {
    const courses = [
        { name: "MBA Course Online", link: "#" },
        { name: "MCA Course Online", link: "#" },
        { name: "MTech Course Online?", link: "#" },
        { name: "MCom Course Online", link: "#" },
        { name: "MSc Course Online", link: "#" },
        { name: "MA Course Online", link: "#" },
        { name: "BBA Course Online", link: "#" },
        { name: "BCA Course Online", link: "#" },
        { name: "BTech Course Online", link: "#" },
        { name: "BCom Course Online", link: "#" },
        { name: "BSc Course Online", link: "#" },
        { name: "BA Course Online", link: "#" },
        { name: "1 Year MBA Online", link: "#" },
        { name: "Global MBA Online", link: "#" },
        { name: "Job Linked Programs", link: "#" },
        { name: "Pay After Placement Programs", link: "#" },
        { name: "Explorer more online and distance courses In India!", link: "#" },
        { name: "Click here for all approved distance and online university in India!", link: "#" },
    ];

    // Function to group courses into pairs (for table layout)
    const chunkCourses = (courses, size) => {
        const chunks = [];
        for (let i = 0; i < courses.length; i += size) {
            chunks.push(courses.slice(i, i + size));
        }
        return chunks;
    };

    const courseChunks = chunkCourses(courses, 2); // Group in pairs

    return (
        <div className="container mx-auto p-5">
            {/* Table Header */}
            <table className="w-full border border-gray-300">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="px-4 py-3 text-lg font-semibold" colSpan="2">
                            Explorer Online Learning Courses In India
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courseChunks.map((chunk, index) => (
                        <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                            {chunk.map((course, i) => (
                                <td key={i} className="px-4 py-3 border-r text-center">
                                    <a href={course.link} className="text-blue-600 font-semibold hover:underline">
                                        {course.name}
                                    </a>
                                </td>
                            ))}
                            {/* Ensures an empty cell if there's an odd number of courses */}
                            {chunk.length === 1 && <td className="px-4 py-3 border-r"></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseTable;
