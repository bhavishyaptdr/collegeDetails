import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is Manipal approved by UGC for online programs?',
      answer: 'Yes, Manipal University is approved by UGC for its online programs.',
    },
    {
      question: 'Does online Manipal university offer placement?',
      answer: 'Yes, the university provides placement assistance for its students.',
    },
    {
      question: 'Which online UG degree courses are offered by online Manipal university?',
      answer: 'Online Manipal University offers various UG degree courses including BA, B.Com, and more.',
    },
    {
      question: 'Which online PG degree courses are offered by online Manipal university?',
      answer: 'The university offers PG degree courses such as MA, M.Com, and MBA online.',
    },
    {
      question: 'How are the exams conducted by online Manipal university?',
      answer: 'Exams are conducted in an online proctored format to ensure integrity.',
    },
    {
      question: 'What are the facilities offered by online Manipal university?',
      answer: 'Facilities include 24/7 access to online resources, counseling services, and technical support.',
    },
    {
      question: 'What are the top part-time courses offered by government-approved universities in India?',
      answer: 'Various part-time courses are available, including diplomas and certification programs.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-0">
          <div
            onClick={() => toggleFAQ(index)}
            className="flex items-center cursor-pointer bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-gray-300 transition duration-200"
          >
            <img src="./star1.jpg" alt="star" className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">{faq.question}</span>
            <span className="ml-auto text-xl">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="mt-2 p-4 border-l-4 border-blue-500 bg-blue-100 rounded-md">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
