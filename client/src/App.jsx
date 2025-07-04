// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';  // Navbar.jsx ফাইলের নাম অনুযায়ী

import './styles/theme.css';
import './styles/main.css';

import LandingPage from './pages/LandingPage';
import Exam from './pages/Exam';
import AvailableCoursesPage from './pages/AvailableCoursesPage';
import FAQ from './pages/FAQ';
import Topics from './pages/Topics';

import ExamProvider from './context/ExamProvider';

function App() {
  return (
    <ExamProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<AvailableCoursesPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/course/:code" element={<Topics />} />
        </Routes>
      </Router>
    </ExamProvider>
  );
}

export default App;
