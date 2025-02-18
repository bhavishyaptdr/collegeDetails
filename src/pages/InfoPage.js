import { useRef } from "react";
import { X, PlayCircle } from "lucide-react";

const infoData = [
  {
    id: 1,
    logo: "/ugc-logo.jpg",
    title: "UGC (University Grants Commission)",
    points: [
      "UGC is a statutory body set up by the Ministry of Education, Government of India.",
      "UGC is responsible for maintaining the standards of Higher Education in India.",
      "UGC approval helps in identifying fake from authentic universities.",
      "UGC approval is a must. Without this, your degree is not valid.",
    ],
  },
  {
    id: 2,
    logo: "/aicte-logo.jpg",
    title: "AICTE (All India Council of Technical Education)",
    points: [
      "AICTE is a statutory body which is a national-level council set up to assess the standard of technical education in India.",
      "AICTE approval is mandatory for institutes that offer technical courses that come under AICTE.",
      "The degrees of engineering institutes (except IITs, NITs, etc.) are valid only if they have AICTE approval.",
      "AICTE is responsible for the planning and development of technical as well as management education in India.",
    ],
  },
  {
    id: 3,
    logo: "/nirf-logo.jpg",
    title: "NIRF Ranking (National Institutional Ranking Framework)",
    points: [
      "NIRF is a ranking framework introduced by the Ministry of Education, Government of India.",
      "It ranks universities and colleges based on various parameters such as teaching, learning, and research.",
      "Institutions with higher NIRF rankings have better credibility and recognition in the education sector.",
      "NIRF provides ranking as per the 11 different categories and the ranking helps students know where the university stands in comparison to other universities in the same category.",
    ],
  },
  {
    id: 4,
    logo: "/wes-logo.jpg",
    title: "WES (World Education Services)",
    points: [
      "WES is an organisation aimed at credential evaluation for immigrants and international students who wish to study/work in Canada or the US.",
      "WES defines and auto-authenticates education in terms of US and Canadian education.",
      "WES is accredited by the National Association of Credential Evaluation Services (NACES).",
    ],
  },
  {
    id: 5,
    logo: "/naac.png",
    title: "NAAC (National Assessment and Accreditation Council)",
    points: [
      "NAAC is a government organisation, set up to assess and accredit the quality of Higher Education Institutions in India.",
      "NAAC provides students with information about the quality of institutes.",
      "NAAC provides full-fledged reviews to universities about strengths, weaknesses, and opportunities that help institutions to improve.",
      "NAAC accreditation ranges from A++ to C. A++ is the highest grade.",
    ],
  },
  {
    id: 6,
    logo: "/qs-word.webp",
    title: "QS World Ranking",
    points: [
      "QS World Ranking is a framework for ranking the higher educational institutions across the globe using their rigorous procedure for evaluation. This is a globally reputed ranking framework for universities and colleges.",
      "Universities and HEIs from across the world are ranked on the basis of a number of factors such as subjects, sustainability, overall ranking, employability, student popularity, business studies, management etc.",
    ],
  },
  {
    id: 7,
    logo: "/NBA.jpg",
    title: "NBA (National Board of Accreditation)",
    points: [
      "NBA, or the National Board of Accreditation is an accreditation body of India that emerged out of the AICTE and is now an autonomous body granting accreditations to universities and institutions providing technical and professional education.",
      "NBA is a major accreditation body for HEIs providing management or engineering courses.",
    ],
  },
  {
    id: 8,
    logo: "/mobile-phone.png",
    title: "Verify Your University",
    points: [
      "Don't make a decision that you might regret!",
      "Pick UGC-DEB stamped universities only!",
    ],
    button: true,
  },
];


const InfoPage = ({ onClose }) => {
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6"
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 relative max-h-[90vh] overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 right-0 bg-white rounded-t-2xl flex items-center px-6 py-4 border-b shadow-md">
          <div className="relative flex items-center space-x-2">
            <img src="/logo.webp" alt="Logo" className="w-28" />
            <a
              href="https://www.youtube.com/watch?v=j0_fWqaZPlg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition absolute left-full -ml-4"
            >
              <PlayCircle size={34} />
            </a>
          </div>
          <button onClick={onClose} className="ml-auto text-gray-500 hover:text-gray-700">
            <X size={28} />
          </button>
        </div>
        <div className="mt-16 max-h-[75vh] overflow-y-auto p-4">
          <h2 className="text-xl font-semibold text-center mb-4">
            Check out these must-have approvals to secure your future
          </h2>
          {infoData.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center space-x-3">
                <img src={item.logo} alt={item.title} className="w-12" />
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
              <ul className="mt-2 space-y-1 text-gray-700">
                {item.points.map((point, index) => (
                  <li key={index}>✅ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
