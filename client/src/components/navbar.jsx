// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  // Toggle theme and store in localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2" to="/">
          <img
            src="/examina_logo.png"
            alt="Examina Logo"
            height="40"
            style={{ objectFit: 'contain' }}
          />
          Examina
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/courses' ? 'active fw-bold' : ''}`} to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/login' ? 'active fw-bold' : ''}`} to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/register' ? 'active fw-bold' : ''}`} to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <button 
                className="btn btn-outline-light d-flex align-items-center"
                onClick={toggleTheme}
                title="Toggle Theme"
                style={{ borderRadius: '50%', width: '40px', height: '40px' }}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
