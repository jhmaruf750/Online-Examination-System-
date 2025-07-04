import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const pieData = [
  { name: 'Data Structure', value: 40 },
  { name: 'DBMS', value: 30 },
  { name: 'Algorithm', value: 20 },
  { name: 'C Programming', value: 10 },
];

const COLORS = ['#0d6efd', '#20c997', '#ffc107', '#fd7e14'];

const barData = [
  { name: 'Accuracy', value: 85 },
  { name: 'Time Management', value: 72 },
  { name: 'Avg Score', value: 91 },
  { name: 'Completion', value: 95 },
];

function PerformanceDemo() {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-light border-top border-bottom">
      <div className="container">
        {/* Section Heading */}
        <h2 className="fw-bold text-center text-primary mb-3">
          📊 Performance Analytics (Demo)
        </h2>
        <p className="text-center text-muted mb-2">
          Here's a sample preview of how your performance metrics will look inside Examina.
        </p>

        {/* Info Alert */}
        <div className="alert alert-info text-center w-75 mx-auto mb-4 shadow-sm" role="alert">
          ℹ️ This is just a demo preview. To view your own personalized analytics, please log in.
        </div>

        {/* Charts Section */}
        <div className="row g-4">
          {/* Pie Chart */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h6 className="text-center text-secondary mb-3 fw-semibold">
                🧪 Topic-wise Score Distribution
              </h6>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h6 className="text-center text-secondary mb-3 fw-semibold">
                📈 Mock Performance Metrics
              </h6>
            <ResponsiveContainer width="100%" height={250}>
  <BarChart
    data={barData}
    layout="vertical"
    margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
  >
    <XAxis type="number" domain={[0, 100]} />
    <YAxis type="category" dataKey="name" width={100} />
    <Tooltip />
    <Bar dataKey="value" fill="#0d6efd" radius={[0, 10, 10, 0]} />
  </BarChart>
</ResponsiveContainer>

            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary btn-lg px-4 shadow-sm"
            onClick={() => navigate('/login')}
          >
            🔐 Log in to view your own analytics →
          </button>
        </div>
      </div>
    </section>
  );
}

export default PerformanceDemo;
