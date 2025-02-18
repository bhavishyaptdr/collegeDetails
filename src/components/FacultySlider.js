import React, { useState, useEffect } from 'react';

const FacultySlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const facultyMembers = [
    {
      name: 'Dr. Kasinathan S',
      position: 'Deputy Director & Professor',
      qualifications: 'PhD, M.Phil, MBA',
      description:
        'Dr. Kasinathan. S is an Professor and Deputy Director at Centre for Distance and Online Education, Manipal University Jaipur. He has over 13 years of experience in teaching management subjects and over seven years of experience in open and distance learning. He has graduated in commerce and has an MBA, M.Phil in Management, and doctorate in Human Resource Management. He is also a UGC-NET (Management) qualified professional. Dr. Kasinathan has attended 7 international and 11 national conferences and presented 18 papers. He has received several accolades, including Best Teacher Award from Rotary Club of Madras Mount, MaGEX Award of Excellence in Academic, Excellence in Teaching Award from Sikkim Manipal University, and Academic Excellence Award from Manipal University Jaipur.',
      image: '/Dr._Kasinathan.webp',
    },
    {
      name: 'Dr. D Pushpa Gowri',
      position: 'Assistant Professor (Senior Scale)',
      qualifications: 'PhD, B.Com, M.Com, MBA',
      description:
        'Dr. D Pushpa Gowri is an Assistant Professor (Senior Scale) and Course Coordinator - commerce programs at the Centre for Distance and Online Education, Manipal University Jaipur. She has done Ph.D. and has over 12 years of teaching experience. She has published research papers in UGC Journals and has presented papers at various conferences. She has handled both Commerce and Management subjects both for UG & PG courses and guided 150+ MBA projects. She has been conferred with Best Women Employee from ISBR Bengaluru. She is a member of the Management Research Scholars Association CBSMS Bengaluru.',
      image: '/Dr._D_Pushpa_Gowri.webp',
    },
    {
      name: 'Dr. Nidhi Vyas',
      position: 'Assistant Professor',
      qualifications: 'Ph.D., MIB, BSc',
      description:
        'Dr Nidhi Vyas is presently working as an Assistant Professor at the Centre for Distance and Online Education (Commerce), Manipal University, Jaipur. She has finished her Ph.D. from SOE, DAVV Indore. She has a teaching experience of 10 years, and she has been engaged in some entrepreneurial endeavors since a decade.',
      image: '/Dr_Nidhi_Vyas.webp',
    },
    {
      name: 'Dr. Yogita S. Garwal',
      position: 'Assistant Professor',
      qualifications: 'PhD, MCom, MBA, LLB',
      description:
        'Dr. Yogita Satish Garwal is an Assistant Professor and Course Coordinator in the Department of Commerce at Centre for Distance and Online Education, Manipal University Jaipur. She has 5+ years of experience in teaching, research, and administration. She has done P.hD., MBA, MCom, and BCom, and LLB. She teaches Business Laws, Principle of Business Management, Management Concept and Organisational Behaviour. She has published multiple research papers and articles in reputed journals. She has organized and attended multiple international conferences, workshops, develpment programs, and seminars.',
      image: '/Dr._Yogita_S._Garwal.webp',
    },
    {
      name: 'Dr. Srinivasan lyer',
      position: 'Deputy Registrar & Assistant Professor',
      qualifications: 'Ph.D., M.Phil., MCom',
      description:
'Dr. Srinivasan lyer is Deputy Registrar and Associate Professor in Commerce at Centre for Distance and Online Education, Manipal University Jaipur. He has 16 years of experience. His area of expertise is Marketing & Management. He has published 18 research papers in international journals and has 3 research papers in Scopus Indexed Journal and one in WOS. Four students were awarded Ph.D. under his guidance in the field of Marketing and Management. He owns 3 patents in E-commerce, Blockchain, and Al in marketing. He is a very active member of the Green Society Organization, Coimbatore, and had delivered many Lectures on Green Campus and sustainable development programs.',
      image: '/Dr._Srinivasan_lyer.webp',
    },
    {
      name: 'Dr. Durgesh Batra',
      position: 'Professor',
      qualifications: 'BSC, MSc, MBA, Ph.D',
      description:
'Dr. Durgesh Batra is currently working as an Professor - Management programs at Centre for Distance and Online Education, Manipal University Jaipur. He holds Ph.D in Management and cleared UGC-NET. He completed MBA in Human Resource Management, MBA in Marketing, and M.Sc. in statistics. He has 18+ years of experience in various engineering and management institutes and universities in India and abroad, teaching courses in programs at Ph.D,, PG, and UG level. Hie teaches statistics, operation research, operation management, research methodology, digital marketing and other general marketing and management courses. He has mentored 3 Ph.D. scholars, published three patents, and published many papers.',
      image: '/Dr._Durgesh_Batra.webp',
    },
    {
      name: 'Dr. Jagriti Singh',
      position: 'Assistant Professor (Senior Scale)',
      qualifications: 'Ph.D., MBA',
      description:
'Dr. Jagriti Singh is currently working as an Assistant Professor (Senior Scale) at the Centre for Distance and Online Education at Manipal University Jaipur. She has done Bachelor of Engineering (B.E), Master of Business Administration (MBA), and Ph. D. Her area of research includes Marketing management, electronic commerce, Digital Marketing, Management Information Systems, and Artificial Intelligence. She has presented many papers at national and international conferences and won various Best Paper awards. During her academic career, she has been awarded the Best Teacher award. She has registered a patent for designing a machine learning model for local business vendors in advertising their offers.',
      image: '/Dr._Jagriti_Singh.webp',
    },
    {
      name: 'Dr. Shikha Maheshwari',
      position: 'Assistant Professor',
      qualifications: 'Ph.D., M.Tech. MSC.',
      description:
'Dr. Shikha Maheshwari is an Associate Professor and Program Coordinator - Computer Application at the Centre for Distance and Online Education, Manipal University Jaipur. She is a founding member of the UEduCon Foundation and has immense experience in academics and research with a vision to improve the quality and global relevance of education. She has guided many faculty members of various Higher Education Institutes in NAAC, NBA accreditations, and Outcome-Based Education. She has earned many accolades at the national and international levels for imparting quality engineering education to the millennials. She has published research papers in refereed international/national journals and conferences.',
      image: '/Dr._Shikha_Maheshwari.webp',
    },


  ];


  // Update number of items to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? facultyMembers.length - itemsToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= facultyMembers.length - itemsToShow ? 0 : prev + 1));
  };

  const handleViewMore = (faculty) => {
    setSelectedFaculty(faculty);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFaculty(null);
  };

  return (
    <div className="container p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Meet Your Faculty</h1>
      <div className="relative flex justify-center items-center">
        <div className="flex overflow-x-auto space-x-4">
          {facultyMembers.slice(currentIndex, currentIndex + itemsToShow).map((member, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg text-center w-80 flex items-center justify-center space-x-4">
              <div className="w-32 h-32 border-2 border-gray-300 rounded-md overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <h2 className="font-bold mt-2">{member.name}</h2>
                <p className="text-gray-500">{member.position}</p>
                <p className="text-gray-400">{member.qualifications}</p>
                <button className="text-blue-500 hover:underline mt-2" onClick={() => handleViewMore(member)}>
                  View More &gt;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-0 bg-white shadow-md p-2 rounded-full">
          <span className="text-xl">&lt;</span>
        </button>
        <button onClick={nextSlide} className="absolute right-0 bg-white shadow-md p-2 rounded-full">
          <span className="text-xl">&gt;</span>
        </button>
      </div>

      {/* Modal */}
      {modalOpen && selectedFaculty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col sm:flex-row">
            {/* Left Side - Image */}
            <div className="w-full sm:w-1/3 flex justify-center items-center">
              <div className="w-48 h-48 border-2 border-gray-300 rounded-md overflow-hidden">
                <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Side - Faculty Details */}
            <div className="w-full sm:w-2/3 text-left p-4">
              <h2 className="text-xl font-bold">{selectedFaculty.name}</h2>
              <h3 className="text-gray-600">{selectedFaculty.position}</h3>
              <p className="text-gray-500">{selectedFaculty.qualifications}</p>
              <p className="mt-4 text-gray-700">{selectedFaculty.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultySlider;
