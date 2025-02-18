import React from "react";

const logos = [
  { name: "UGC", src: "/ugc-logo.jpg", link: "#" },
  { name: "AICTE", src: "/aicte-logo.jpg", link: "#" },
  { name: "NIRF", src: "/nirf-logo.jpg", link: "#" },
  { name: "WES", src: "/wes-logo.jpg", link: "#" },
  { name: "QS", src: "/qs-word-university-rankings-.jpg", link: "#" },
  { name: "NBA", src: "/NBA.jpg", link: "#" },
  { name: "NAAC A+", src: "/logo-naac-a-plus.jpg", link: "#" },
];

const ApprovalLogos = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Manipal University Online Approved By
        </h1>

        {/* Logos Grid - Closed in Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center mb-6">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              className="flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-white w-32 h-32 flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-24 w-auto"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Ranking Info */}
        <div className="flex items-center justify-center bg-blue-100 text-blue-800 text-lg font-semibold py-3 px-6 rounded-lg shadow">
          🎓 RANK **64** In the University Rankings!
        </div>
      </div>
    </section>
  );
};

export default ApprovalLogos;
