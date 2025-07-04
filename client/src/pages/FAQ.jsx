import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "🧑‍🎓 Who can use this platform?",
      answer: "Only RUET CSE students from 1-1 to 4-2 can use this system.",
    },
    {
      question: "📝 How do I start an exam?",
      answer: "Select your course → choose topic → click on Start Exam.",
    },
    {
      question: "📚 Can I give the same exam multiple times?",
      answer: "You can retry demo exams, but final exams are one-time only.",
    },
    {
      question: "💡 What types of questions are available?",
      answer: "We provide MCQ, True/False, and Code Snippets-based questions.",
    },
    {
      question: "⏰ Is there a time limit?",
      answer: "Yes, each exam has a specific duration mentioned before starting.",
    },
    {
      question: "📱 Is it mobile-friendly?",
      answer: "Absolutely! The platform is responsive and works on all devices.",
    },
    {
      question: "🔐 How secure is this exam system?",
      answer: "We follow secure practices and limit question repetition to prevent cheating.",
    },
    {
      question: "📨 Who do I contact for help?",
      answer: "Contact the batch CR or email ruetcseexam@support.com",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-page-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold animate__animated animate__fadeInDown">
          ❓ Frequently Asked Questions
        </h2>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeIndex === idx ? "active" : ""}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="faq-question">
                {item.question}
                <span className="faq-toggle-icon">
                  {activeIndex === idx ? "▲" : "▼"}
                </span>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === idx ? "500px" : "0",
                  transition: "max-height 0.4s ease",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
