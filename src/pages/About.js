import React from "react";
import CourseTable from "../components/CourseTable";
import Features from "../components/Features";
import CourseFeeTable from "../components/CourseFeeTable";
import { FaCheckSquare } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20 py-5">
      <img src="/ugc_announced.webp" alt="ugc_announced" className="mb-4 w-full h-auto" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Manipal University Online</h1>
      <p className="mb-4 text-justify">
        The online Manipal university is part of the prestigious Manipal University Jaipur (MUJ).
        The university started offering courses in online mode in the year 2021. The University Grants
        Commission (UGC) has entitled Online Manipal University to offer UG and PG programs.
      </p>
      <p className="mb-4 text-justify">
        The university currently offers BCA, BBA, and B.Com in the undergraduate category while
        MCA, MBA, M.Com, and MA JMC in the postgraduate category. These online courses are taught
        by the esteemed same faculty of the Manipal University Jaipur and real-world mentors.
      </p>
      <p className="text-justify">
        The university offers an enhanced digital learning platform where you can find all your
        course material and cutting-edge tutorials. The university conducts examinations in online
        mode using this LMS. These online examinations are secure as they are remotely proctored.
        The LMS even provides self-learning opportunities to the students with the help of various
        practice tests and online quizzes.
      </p>

      <CourseTable />

      <p className="mt-4 text-justify">
        The programs at the online Manipal are designed to offer comprehensive educational experiences
        to help students develop skill-sets that are relevant to jobs in diverse industries. The curriculum
        and the learning methodology have been designed not only by the professors but also by expert
        practitioners from relevant industries.
      </p>
      <p className="mt-4 text-justify">
        The university offers easy financing options like no-cost EMIs to help students from all backgrounds
        gain knowledge and education by overcoming the barrier of finances. There are also attractive scholarship
        offers for government employees, defense personnel, meritorious students, and differently-abled people.
      </p>

      <Features />
      <CourseFeeTable />

      <div className="mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Manipal University Online Facts</h1>
        <ul className="list-disc pl-5 space-y-3">
          {[
            "Online Manipal University provides students with over 10 fully online, accredited degree and diploma courses. All the courses are approved by UGC to be offered in online mode.",
            "The university offers BCA, BBA, and B.Com undergraduate degree courses in the online mode and MCA, MBA, M.Com, and MA JMC postgraduate degree courses in the online mode.",
            "The university has its own LMS with various salient and customized features like self-learning activities such as online quizzes, practice tests, and tutorials.",
            "The examinations are conducted in the online mode, which are remotely proctored through the LMS.",
            "The university offers no-cost EMI options for easy financing.",
            "There are scholarship opportunities for government employees, defense personnel, meritorious students, and differently-abled people."
          ].map((fact, index) => (
            <li key={index} className="flex items-start">
              <FaCheckSquare className="text-green-500 mr-2 mt-1" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
