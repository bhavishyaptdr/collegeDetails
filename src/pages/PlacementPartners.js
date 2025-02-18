import React from 'react';

const PlacementPartners = () => {
  const companies = [
    { name: "Accenture", logo: "/accenture.webp" },
    { name: "Capgemini", logo: "/capgemini.webp" },
    { name: "Deloitte", logo: "/deloitte.webp" },
    { name: "EY", logo: "/ey.webp" },
    { name: "HP", logo: "/hp.webp" },
    { name: "IBM", logo: "/ibm.webp" },
    { name: "Infosys", logo: "/infosys.webp" },
    { name: "KPMG", logo: "/kpmg.webp" },
    { name: "TCS", logo: "/tcs.webp" },
    { name: "Wipro", logo: "/wipro.webp" },
    { name: "Genpact", logo: "/genpact.webp" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          Manipal University Online Placement Partners
        </h1>
        <p className="mb-6 text-gray-700">
          Our students have an opportunity to:
        </p>

        <ul className="text-left space-y-3 mb-8">
          <li className="flex items-center justify-center md:justify-start">
            <span className="mr-2 text-green-500">✔️</span>
            Learn employability skills through assessments and tests
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="mr-2 text-green-500">✔️</span>
            100+ recruiters from Fortune 500 Companies
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="mr-2 text-green-500">✔️</span>
            Job opportunities that suitably fit the student profile
          </li>
        </ul>

        <h2 className="text-lg font-bold mb-6">Our students work at:</h2>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-32 text-center">
            <div className="text-xl font-bold">50%</div>
            <div>Avg Salary Hike</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-32 text-center">
            <div className="text-xl font-bold">300+</div>
            <div>Hiring Partners</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-32 text-center">
            <div className="text-xl font-bold">3X</div>
            <div>Interview Opportunities</div>
          </div>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 border rounded-lg p-3 shadow hover:shadow-lg transition w-24 sm:w-28 md:w-32"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-20 object-contain"
              />
              <span className="text-xs font-semibold mt-2 text-center">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
