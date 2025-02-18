import { useRef } from "react";
import { X } from 'lucide-react';
const userReviews = [
  {
    name: "Amit Sharma",
    course: "Online MBA",
    date: "February 7, 2025",
    rating: 4,
    review:
      "The online MBA program offers a great learning experience with highly knowledgeable professors and interactive learning modules. Highly recommend it for working professionals.",
  },
  {
    name: "Priya Verma",
    course: "Online BCA",
    date: "February 6, 2025",
    rating: 5,
    review:
      "The BCA course was well-structured and comprehensive. The faculty was great, and the course content was up-to-date. I feel confident in my skills now!",
  },
  {
    name: "Ankur Yadav",
    course: "Online BBA",
    date: "February 8, 2025",
    rating: 3,
    review:
      "A good course, but I feel that some of the subjects could be more detailed. However, the course still provides useful knowledge for beginners.",
  },
  {
    name: "Sneha Patel",
    course: "Online M.Com",
    date: "February 10, 2025",
    rating: 4,
    review:
      "This course is a good option for those looking to enhance their skills in commerce. The practical application of concepts could be improved, but overall a good learning experience.",
  },
  {
    name: "Ravi Gupta",
    course: "Online MBA",
    date: "February 9, 2025",
    rating: 5,
    review:
      "The MBA course was an excellent experience. The modules were well designed, and the professors were knowledgeable. This has helped me advance my career significantly.",
  },
  {
    name: "Kiran Joshi",
    course: "Online M.A.",
    date: "February 12, 2025",
    rating: 4,
    review:
      "Great experience! The course provided useful knowledge, and the instructors were friendly. However, I feel there could be more live sessions for better interaction.",
  },
  {
    name: "Alok Singh",
    course: "Online B.Com",
    date: "February 11, 2025",
    rating: 5,
    review:
      "I absolutely loved this course. The instructors were clear, and the curriculum was very practical. I gained a lot of insights that I will apply in my career.",
  },
  {
    name: "Nisha Reddy",
    course: "Online MBA",
    date: "February 14, 2025",
    rating: 3,
    review:
      "The course was decent. However, I expected more in-depth case studies and real-world examples. Good for basic knowledge but lacks advanced content.",
  },
  {
    name: "Manish Kumar",
    course: "Online MCA",
    date: "February 13, 2025",
    rating: 5,
    review:
      "The MCA online program is fantastic! It covered all necessary topics in depth, and the support from the faculty was excellent. I feel well-prepared for the industry.",
  },
  {
    name: "Rohit Mehra",
    course: "Online M.Com",
    date: "February 15, 2025",
    rating: 4,
    review:
      "I enjoyed the course. The learning material was thorough, and the assignments helped reinforce my knowledge. A good course overall for those interested in commerce.",
  },
  {
    name: "Ayesha Khan",
    course: "Online BCA",
    date: "February 16, 2025",
    rating: 5,
    review:
      "Amazing experience with the BCA online course. The teachers were very approachable, and the curriculum was challenging. Highly recommend to anyone looking to pursue a career in IT.",
  },
  {
    name: "Sandeep Rawat",
    course: "Online MBA",
    date: "February 17, 2025",
    rating: 4,
    review:
      "Great program with a comprehensive curriculum. The professors were excellent, but I felt the course could have included more case studies for better application.",
  },
  {
    name: "Meenal Joshi",
    course: "Online BBA",
    date: "February 18, 2025",
    rating: 3,
    review:
      "The BBA course was good but could be improved with more interactive elements. The course content was solid, but I would have liked more industry insights.",
  },
  {
    name: "Pooja Sethi",
    course: "Online MA",
    date: "February 20, 2025",
    rating: 4,
    review:
      "The course was insightful, but I wish there were more workshops or seminars. Nonetheless, the knowledge gained was useful for my personal development.",
  },
  {
    name: "Vikas Tiwari",
    course: "Online B.Com",
    date: "February 19, 2025",
    rating: 5,
    review:
      "I found this course to be incredibly helpful. The topics were relevant, and the online format made it easy to follow. Definitely worth it for anyone wanting to improve their skills.",
  },
  {
    name: "Suman Arora",
    course: "Online MBA",
    date: "February 22, 2025",
    rating: 4,
    review:
      "The MBA course was very engaging, and the discussions were quite interactive. The course materials were good, but more real-world examples would make it even better.",
  },
  {
    name: "Tanuja Rai",
    course: "Online MCA",
    date: "February 23, 2025",
    rating: 5,
    review:
      "Excellent course with clear concepts and practical applications. I would highly recommend it to anyone pursuing a career in computer science and IT.",
  },
  {
    name: "Neha Sharma",
    course: "Online BCA",
    date: "February 24, 2025",
    rating: 3,
    review:
      "Good course but needs more advanced content. The basics were well covered, but I would have liked more detailed lessons on current technology trends.",
  },
  {
    name: "Gaurav Yadav",
    course: "Online M.Com",
    date: "February 25, 2025",
    rating: 5,
    review:
      "The M.Com course was excellent. The faculty provided great insights, and the course materials were really helpful for my studies and career.",
  },
  {
    name: "Shalini Verma",
    course: "Online BBA",
    date: "February 26, 2025",
    rating: 4,
    review:
      "The BBA course offered solid foundational knowledge. I wish there were more practical applications included to bridge the gap between theory and practice.",
  },
];


const Review = ({ onClose, isOpen }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4"
    >
      <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg relative">
        {/* Fixed Header with Close Button */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-50">
          <h2 className="text-2xl font-bold text-center w-full">User Reviews</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Reviews Section */}
        <div className="p-6 max-h-[85vh] overflow-y-auto space-y-4">
          {userReviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-md shadow">
              <h3 className="font-semibold">{review.name} - {review.course}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="mt-2 text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
