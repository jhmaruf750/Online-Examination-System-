import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      title: 'Sign Up / Log In',
      desc: 'Create an account using your RUET email and log in to access the full dashboard.',
    },
    {
      title: 'Select Course & Exam',
      desc: 'Choose your relevant course and scheduled exam provided by faculty.',
    },
    {
      title: 'Start Exam with Timer',
      desc: 'Join your exam with secure full-screen mode and real-time countdown.',
    },
    {
      title: 'Get Result Instantly',
      desc: 'See your score and review detailed performance report instantly after submission.',
    },
  ];

  return (
    <section className="how-it-works-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Image */}
          <div className="col-lg-6 text-center">
            <img
              src="/choose.png"
              alt="How it works"
              className="img-fluid howitworks-img shadow-lg"
            />
          </div>

          {/* Right: Steps */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-gradient">📘 How Examina Works</h2>
            <div className="steps-wrapper">
              {steps.map((step, idx) => (
                <div key={idx} className="step-card mb-4 shadow-sm">
                  <div className="step-number">{idx + 1}</div>
                  <div className="step-content">
                    <h5 className="fw-semibold mb-1">{step.title}</h5>
                    <p className="text-muted small">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
