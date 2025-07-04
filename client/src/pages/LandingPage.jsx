// src/pages/LandingPage.jsx

import './LandingPage.css';
import AvailableCourses from "./AvailableCoursesPage";
import FAQ from "./FAQ";
import TryDemoExam from "../components/TryDemoExam";
import Statistics from "../components/Statistics";
import Newsletter from '../components/Newsletter';
import NoticeBoard from '../components/NoticeBoard';
import HowItWorks from '../components/HowItWorks';
import ExamCalendar from '../components/ExamCalendar';
import Leaderboard from '../components/Leaderboard';
import AppBanner from '../components/AppBanner';

import PerformanceDemo from '../components/PerformanceDemo';


function RuetHighlight() {
  return (
    <section className="ruet-highlight-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3">
            🎓 Examina — <span style={{ color: '#28a745', fontWeight: '900' }}>RUET CSE</span> Online Examination Portal
          </h2>
          <p className="fs-5 text-muted fst-italic">
            Developed by <strong>RUETians for RUETians</strong>, crafted exclusively to meet the academic needs of the Computer Science & Engineering department at Rajshahi University of Engineering & Technology.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-5 col-lg-4 highlight-card shadow-sm p-4 rounded bg-white">
            <h4 className="text-primary mb-3">Tailored for RUET CSE</h4>
            <p className="text-secondary">
              Complete integration of <strong>all RUET CSE courses</strong> with topic-wise exams designed to match the syllabus and curriculum perfectly.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 highlight-card shadow-sm p-4 rounded bg-white">
            <h4 className="text-primary mb-3">Secure & Proctored</h4>
            <p className="text-secondary">
              Advanced <strong>anti-cheating</strong> features and secure exam environment to maintain academic integrity.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 highlight-card shadow-sm p-4 rounded bg-white">
            <h4 className="text-primary mb-3">User-Friendly Interface</h4>
            <p className="text-secondary">
              Built with <strong>React</strong> and <strong>Bootstrap</strong> for a clean, intuitive, and responsive user experience across all devices.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 highlight-card shadow-sm p-4 rounded bg-white">
            <h4 className="text-primary mb-3">Custom Exam Options</h4>
            <p className="text-secondary">
              Choose courses, select topics, and set question numbers to tailor your practice exams for focused preparation.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 highlight-card shadow-sm p-4 rounded bg-white">
            <h4 className="text-primary mb-3">Real-Time Performance</h4>
            <p className="text-secondary">
              Get instant results and detailed feedback to track your progress and improve continuously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
                Seamless Online Exams. Anytime, Anywhere.
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Empowering Every RUET CSE Student.
                Prepare for exams the smart way — customized quizzes, real-time results, and syllabus-matched topics. Built by RUETians, for RUETians.
              </p>
              <a href="/register" className="btn btn-primary btn-lg me-3 animate__animated animate__fadeInLeft animate__delay-2s">
                Get Started
              </a>
              <a href="/login" className="btn btn-outline-light btn-lg animate__animated animate__fadeInRight animate__delay-2s">
                Login
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/hero.png"
                alt="Online Exam Illustration"
                className="img-fluid animate__animated animate__zoomIn"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

     
      <NoticeBoard />
      {/* RUET CSE Highlight Section */}
      <RuetHighlight />
       <HowItWorks />
      
       <PerformanceDemo />

       <ExamCalendar />
       <Leaderboard />

      {/* ✅ Available Courses Section */}
      <AvailableCourses />

      {/* notice*/}
      


      { /* demo exam section*/ }
      <TryDemoExam />

      {/*statistics section*/}
      <Statistics />

      {/* Other content... */}
       <AppBanner />
      
      <Newsletter />



      {/* ✅ FAQ Section */}
      <FAQ />

      {/* Features Section */}
      <section className="features-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Why Choose Examina?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-shield-lock display-4 text-primary mb-3"></i>
              <h4>Secure & Proctored</h4>
              <p>Advanced security features to prevent cheating and ensure exam integrity.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-speedometer2 display-4 text-primary mb-3"></i>
              <h4>Fast & Scalable</h4>
              <p>Handles thousands of concurrent exams with minimal latency.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-people-fill display-4 text-primary mb-3"></i>
              <h4>User Friendly</h4>
              <p>Intuitive UI designed for both educators and students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>© 2025 Examina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
