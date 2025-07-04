import "animate.css";
import { Link } from "react-router-dom";

function AvailableCourses() {
  const courseList = [
    {
      semester: "1-1",
      courses: [
        { title: "Structured Programming", code: "cse1101" },
        { title: "Computer Fundamentals and Ethics", code: "cse1100" },
        { title: "Basic Electrical Engineering", code: "eee1151" },
        { title: "Differential and Integral Calculus", code: "math1113" },
        { title: "Functional English", code: "hum1113" },
        { title: "Inorganic and Physical Chemistry", code: "chem1113" },
      ],
    },
    {
      semester: "1-2",
      courses: [
        { title: "Data Structure", code: "cse1201" },
        { title: "Object Oriented Programming", code: "cse1203" },
        { title: "Electronic Devices and Circuits", code: "eee1251" },
        { title: "Coordinate Geometry and ODE", code: "math1213" },
        { title: "Physics", code: "phy1213" },
      ],
    },
    {
      semester: "2-1",
      courses: [
        { title: "Discrete Mathematics", code: "cse2101" },
        { title: "Digital Logic Design", code: "cse2103" },
        { title: "Electrical Drives and Instrumentation", code: "eee2151" },
        { title: "Vector Analysis and Linear Algebra", code: "math2113" },
        { title: "Economics, Government and Sociology", code: "hum2113" },
      ],
    },
    {
      semester: "2-2",
      courses: [
        { title: "Algorithm Analysis and Design", code: "cse2201" },
        { title: "Numerical Methods", code: "cse2203" },
        { title: "Microprocessors, Microcontrollers and Assembly Language", code: "cse2205" },
        { title: "Complex Variable, PDE and Harmonic Analysis", code: "math2213" },
        { title: "Industrial Management and Accountancy", code: "hum2213" },
      ],
    },
    {
      semester: "3-1",
      courses: [
        { title: "Database Systems", code: "cse3101" },
        { title: "Theory of Computation", code: "cse3103" },
        { title: "Computer Architecture", code: "cse3105" },
        { title: "Computer Interfacing and Embedded Systems", code: "cse3107" },
        { title: "Applied Statistics and Queuing Theory", code: "math3113" },
      ],
    },
    {
      semester: "3-2",
      courses: [
        { title: "Operating Systems", code: "cse3201" },
        { title: "Data Communication", code: "cse3203" },
        { title: "Software Engineering", code: "cse3205" },
        { title: "Artificial Intelligence", code: "cse3207" },
        { title: "Digital Signal Processing", code: "eee3251" },
      ],
    },
    {
      semester: "4-1",
      courses: [
        { title: "Compiler Design", code: "cse4101" },
        { title: "Computer Networks", code: "cse4103" },
        { title: "Digital Image Processing", code: "cse4105" },
        { title: "Optional I", code: "cse41xx" },
        { title: "Optional II", code: "cse41xy" },
      ],
    },
    {
      semester: "4-2",
      courses: [
        { title: "Computer Graphics", code: "cse4201" },
        { title: "Machine Learning", code: "cse4203" },
        { title: "Security and Privacy", code: "cse4205" },
        { title: "Optional III", code: "cse42xx" },
        { title: "Optional IV", code: "cse42xy" },
      ],
    },
  ];

  return (
    <section className="available-courses py-5 bg-light">
      <div className="container-fluid px-5">
        <h2 className="text-center fw-bold mb-5 animate__animated animate__fadeInUp">
          📚 Available Courses (1-1 to 4-2)
        </h2>
        <div className="row justify-content-center g-4">
          {courseList.map((sem, index) => (
            <div className="col-md-3 d-flex" key={index}>
              <div
                className="card shadow rounded-4 border-0 w-100 animate__animated animate__zoomIn"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
                }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-primary fw-bold text-center mb-3">
                      {sem.semester} Semester
                    </h5>
                    <ul className="list-unstyled">
                      {sem.courses.map((course, i) => (
                        <li key={i} className="mb-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-secondary">
                              <i className="bi bi-check-circle-fill text-success me-1"></i>
                              {course.title}
                            </span>
                            <Link
                              to={`/course/${course.code}`}
                              className="btn btn-outline-primary btn-sm"
                            >
                              View Topics
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvailableCourses;
