// src/context/ExamProvider.jsx
import React, { useState } from "react";
import ExamContext from "./ExamContext";

function ExamProvider({ children }) {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [examDuration, setExamDuration] = useState(5); // in minutes

  return (
    <ExamContext.Provider
      value={{
        selectedTopics,
        setSelectedTopics,
        selectedCourse,
        setSelectedCourse,
        questionCount,
        setQuestionCount,
        examDuration,
        setExamDuration,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

export default ExamProvider;
