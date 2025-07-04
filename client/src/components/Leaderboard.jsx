import React from 'react';
import './Leaderboard.css';

const toppers = [
  {
    name: 'Jahid Hasan Maruf',
    roll: '2103035',
    score: '97%',
    image: '/topper1.jpg',
  },
  {
    name: 'Mahfuz Mridul',
    roll: '2103010',
    score: '95%',
    image: '/topper2.jpg',
  },
  {
    name: 'Mustafizur Rahman',
    roll: '2103034',
    score: '94%',
    image: '/topper3.jpg',
  },
];

function Leaderboard() {
  return (
    <section className="leaderboard-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-success">🏆 Top Performers</h2>
        <div className="row justify-content-center g-4">
          {toppers.map((student, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="topper-card shadow-sm text-center">
                <img
                  src={student.image}
                  alt={student.name}
                  className="topper-img rounded-circle mb-3"
                />
                <h5 className="fw-semibold mb-1">{student.name}</h5>
                <p className="text-muted small mb-0">Roll: {student.roll}</p>
                <p className="score-text mt-2">{student.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leaderboard;
