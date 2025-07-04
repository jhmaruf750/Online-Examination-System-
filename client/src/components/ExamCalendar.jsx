import React from 'react';
import './ExamCalendar.css';

const exams = [
  { date: '2025-07-05', title: 'CSE 3101: Final Exam', time: '10:00 AM' },
  { date: '2025-07-10', title: 'Database Practice Test', time: '2:00 PM' },
  { date: '2025-07-15', title: 'Board Viva for 3-1', time: '11:00 AM' },
];

function formatDate(dateStr) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

function ExamCalendar() {
  return (
    <section className="exam-calendar-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-primary">📅 Upcoming Exams</h2>
        <div className="row justify-content-center g-4">
          {exams.map((exam, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="calendar-card shadow-sm">
                <div className="calendar-date">{formatDate(exam.date)}</div>
                <div className="calendar-content">
                  <h5 className="fw-semibold mb-1">{exam.title}</h5>
                  <p className="text-muted mb-0">🕐 {exam.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExamCalendar;
