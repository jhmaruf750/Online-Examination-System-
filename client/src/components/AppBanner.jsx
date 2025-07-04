import React from 'react';
import './AppBanner.css';

function AppBanner() {
  return (
    <section className="app-banner-section py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* App Image */}
          <div className="col-md-6 text-center">
            <img
              src="/app_preview.png"
              alt="Examina App"
              className="img-fluid app-img"
            />
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-3">📱 Get the Examina App</h2>
            <p className="text-muted mb-4 fs-5">
              Take exams anytime, get notifications instantly and track your performance — all in your pocket.
            </p>
            <div className="d-flex align-items-center gap-3">
              <a
                href="#"
                className="btn btn-dark btn-lg px-4 shadow-sm"
              >
                <i className="bi bi-google-play me-2"></i>
                Get on Play Store
              </a>
              <span className="comingsoon-text">Coming Soon on iOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppBanner;
