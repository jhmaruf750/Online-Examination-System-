// src/components/TryDemoExam.jsx
import React from "react";
import { motion } from "framer-motion"; // ✅ Correct Import

function TryDemoExam() {
  return (
    <section className="try-demo-exam-section py-5 bg-primary text-white">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Try a Demo Exam
        </motion.h2>
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the power of Examina’s online platform with a practice exam.
        </motion.p>
        <motion.a
          href="/demo-exam"
          className="btn btn-light btn-lg fw-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Try Now
        </motion.a>
      </div>
    </section>
  );
}

export default TryDemoExam;
