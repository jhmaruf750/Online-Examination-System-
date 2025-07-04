import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 text-dark">📬 Stay Updated</h2>
        <p className="text-muted mb-4 fs-5">
          Get notified when new exams are published
        </p>
        <form className="row justify-content-center g-3">
          <div className="col-md-6 col-sm-10">
            <input
              type="email"
              className="form-control form-control-lg shadow-sm"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary btn-lg shadow-sm px-4">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
