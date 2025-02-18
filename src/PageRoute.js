import React, { useRef } from 'react';
import About from './pages/About';
import ApprovalLogos from './pages/ApprovalLogos';
import CourseCardSlider from './components/CourseCardSlider';
import CertificateInfo from './pages/CertificateInfo';
import EMIDetails from './pages/EMIDetails';
import AdmissionProcess from './pages/AdmissionProcess';
import ExamPattern from './pages/ExamPattern';
import PlacementPartners from './pages/PlacementPartners';
import FacultySlider from './components/FacultySlider';
import FAQ from './pages/FAQ';
import BlogVideoSection from './components/BlogVideoSection';
import UniversityCompare from './pages/UniversityCompare';
import StudentFeedback from './components/StudentFeedback';
import ReviewSection from './pages/ReviewSection';
import ReviewSummary from './components/ReviewSummary';
import CallModal from './components/CallModal';
import UniversityPage from './pages/UniversityPage';
import Sidebar from './components/Sidebar';

const PageRoute = () => {
  const reviewSectionRef = useRef(null);

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 sm:ml-64 mt-6 sm:mt-0">
        {/* Pass ref to UniversityPage */}
        <UniversityPage reviewSectionRef={reviewSectionRef} />
        <About />
        <ApprovalLogos />
        <CourseCardSlider />
        <CertificateInfo />
        <EMIDetails />
        <AdmissionProcess />
        <ExamPattern />
        <PlacementPartners />
        <FacultySlider />
        <FAQ />
        <BlogVideoSection />
        <UniversityCompare />
        <StudentFeedback />

        {/* Attach ref to ReviewSection */}
        <div ref={reviewSectionRef}>
          <ReviewSection />
        </div>

        <ReviewSummary />
        <CallModal />
      </div>
    </div>
  );
};

export default PageRoute;
