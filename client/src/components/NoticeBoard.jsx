import React from 'react';
import './NoticeBoard.css';

function NoticeBoard() {
  const notices = [
    "📢 Final Mock Exam for CSE 3-1 will start on 5th July.",
    "🕐 New time-slot added for ICT Practice Exam.",
    "🚨 Submit your assignments before 3rd July!",
    "📘 Semester final schedule will be published soon."
  ];

  return (
    <section className="notice-board-section py-2">
      <div className="container d-flex align-items-center gap-2">
        <strong className="text-primary flex-shrink-0">📌 Notice Board:</strong>
        <div className="notice-scroll-wrapper">
          <div className="notice-scroll">
            {notices.map((notice, idx) => (
              <span key={idx} className="me-4">{notice}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeBoard;
