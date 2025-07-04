// src/pages/Exam.jsx
import { useContext, useEffect, useState } from "react";
import ExamContext from "../context/ExamContext";
import { getGPTQuestions } from "../utils/gpt";

function Exam() {
  const {
    selectedTopics,
    selectedCourse,
    questionCount,
    examDuration,
  } = useContext(ExamContext);

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(examDuration * 60); // seconds
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Fetch questions from GPT when page loads
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getGPTQuestions(selectedTopics, questionCount);
        setQuestions(response);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions", err);
      }
    }
    fetchData();
  }, []);

  // Timer Countdown
  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const correctCount = questions.reduce((acc, q, idx) => {
    return acc + (answers[idx] === q.answer ? 1 : 0);
  }, 0);

if (loading) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, #dbeafe, #eef2ff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          maxWidth: "600px",
        }}
      >
        <h2 style={{ color: "#0d6efd", marginBottom: "20px" }}>
          🧠 Generating Questions...
        </h2>
        <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
          Please wait a few seconds while we prepare your custom exam questions based on selected topics.
        </p>
      </div>
    </div>
  );
}


  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">
          📝 {selectedCourse?.code} - {selectedCourse?.title}
        </h4>
        <div className="fw-semibold text-danger fs-5">
          ⏱ Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </div>
      </div>

      {/* Question Body */}
      {!submitted ? (
        <>
          <div className="bg-white shadow p-4 rounded mb-4">
            <h5 className="fw-bold mb-3">
              {currentIndex + 1}. {questions[currentIndex]?.question}
            </h5>
            <div className="list-group">
              {questions[currentIndex]?.options.map((opt, i) => (
                <button
                  key={i}
                  className={`list-group-item list-group-item-action ${
                    answers[currentIndex] === opt ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
            >
              ⬅️ Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentIndex((prev) => prev + 1)}
              >
                Next ➡️
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>
                ✅ Submit Exam
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-success fw-bold mb-3">🎉 Exam Completed!</h3>
          <p className="fs-5">
            You got <strong>{correctCount}</strong> out of{" "}
            <strong>{questions.length}</strong> correct.
          </p>

          <h5 className="mt-4">📘 Review:</h5>
          <ul className="list-group mt-2">
            {questions.map((q, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex justify-content-between"
              >
                <div>
                  <strong>Q{idx + 1}: </strong>
                  {q.question}
                  <br />
                  <span className="text-muted">
                    Your Answer: {answers[idx] || "❌ Not Answered"}
                  </span>
                </div>
                <div>
                  ✅ Correct: <strong>{q.answer}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Exam;
