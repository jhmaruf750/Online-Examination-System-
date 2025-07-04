import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseTopics from "../data/courseTopics";
import ExamContext from "../context/ExamContext";

function Topics() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { setSelectedTopics, setSelectedCourse, setQuestionCount, setExamDuration } = useContext(ExamContext);

  const [selected, setSelected] = useState([]);
  const [questionCount, setQuestionCountLocal] = useState(10);
  const [duration, setDuration] = useState(5); // in minutes

  const course = courseTopics
    .flatMap((sem) => sem.courses)
    .find((c) => c.code.replace(/\s+/g, "").toLowerCase() === code.toLowerCase());

  if (!course) return <div className="p-5">❌ Course Not Found</div>;

  const handleToggle = (topic) => {
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleStart = () => {
    if (selected.length === 0) return alert("Please select at least one topic.");
    if (questionCount < 1 || questionCount > 500) return alert("Choose between 1-500 questions");
    if (duration < 1 || duration > 180) return alert("Set exam duration 1-180 minutes");

    setSelectedTopics(selected);
    setSelectedCourse(course);
    setQuestionCount(questionCount);
    setExamDuration(duration);
    navigate("/exam");
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", padding: "30px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "12px" }}>
        <h2 className="mb-4 text-center fw-bold text-primary">{course.code} – {course.title}</h2>

        <div className="mb-3">
          <label>📝 Number of Questions (max 500)</label>
          <input
            type="number"
            className="form-control"
            value={questionCount}
            onChange={(e) => setQuestionCountLocal(Number(e.target.value))}
            min={1}
            max={500}
          />
        </div>

        <div className="mb-4">
          <label>⏱ Exam Duration (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            min={1}
            max={180}
          />
        </div>

        <h5 className="mb-2 fw-semibold">📚 Select Topics:</h5>
        <ul className="list-group mb-4">
          {course.topics.map((topic, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{topic}</span>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selected.includes(topic)}
                onChange={() => handleToggle(topic)}
              />
            </li>
          ))}
        </ul>

        <div className="text-center">
          <button className="btn btn-success px-5 py-2 fw-bold" onClick={handleStart}>
            Start Exam 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topics;
