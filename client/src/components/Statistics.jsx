import { motion } from "framer-motion";

function Statistics() {
  const stats = [
    { label: "Total Courses", value: 32 },
    { label: "Registered Students", value: "1200+" },
    { label: "Exams Taken", value: "4500+" },
    { label: "Average Score", value: "82%" },
  ];

  return (
    <section className="stats-section py-5 bg-light">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-5 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📊 Examina Statistics
        </motion.h2>
        <div className="row justify-content-center">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className="col-md-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="card shadow rounded-4 p-4 border-0">
                <h3 className="display-5 fw-bold text-primary mb-2">
                  {item.value}
                </h3>
                <p className="text-muted mb-0">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
