// src/Home.js
import React from "react";
import "./StyleSheets/Home.css"; // Create this CSS file to style the home page

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Welcome to FreshHire</h1>
        <p className="subtitle">Your Gateway to Exciting Career Opportunities</p>
      </header>

      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About FreshHire</h2>
          <p>
            FreshHire is a platform dedicated to helping freshers find job opportunities in both
            Multinational Corporations (MNCs) and Startups. We understand that starting a career
            can be challenging, which is why we have curated a wide range of job listings to match
            your skills and aspirations.
          </p>
          <p>
            Whether you dream of working in a global corporation or a dynamic startup environment,
            FreshHire has got you covered. Our mission is to connect talented freshers like you with
            employers who value your potential and are eager to provide exciting career paths.
          </p>
        </div>
      </section>

      <section className="features-section">
          <h2 className="features-title">Why Choose FreshHire?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Wide Range of Opportunities</h3>
            <p>
              Browse through a diverse selection of job listings from leading MNCs and innovative
              Startups, providing you with ample choices for your career.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-user-check"></i>
            </div>
            <h3>Fresher-Friendly Employers</h3>
            <p>
              Our partnered employers appreciate the potential freshers bring to the table and are
              eager to offer opportunities for career growth and development.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Seamless Application Process</h3>
            <p>
              Apply to jobs with ease through our user-friendly platform, making the application
              process hassle-free for freshers.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FreshHire. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
