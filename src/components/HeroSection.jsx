import React from 'react';
import Header from './Header';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container" id="hero">
      {/* Top Header */}
      <Header />

      {/* Center Event Branding */}
      <div className="hero-main">
        <div className="hero-badge-wrapper">
          <img 
            src="/herologo.png" 
            alt="MAKKA DESIGN PAKKA" 
            className="hero-title-img"
          />
        </div>

        {/* Register Now Button */}
        <button className="hero-register-btn" id="register-now-btn">
          Register Now
        </button>
      </div>

      {/* Bottom Event Details Bar */}
      <footer className="hero-bottom-bar">
        <div className="hero-info-item hero-info-left">
          <span>October 3, 2026</span>
        </div>
        <div className="hero-info-item hero-info-center">
          <span>Time :09:00 - 03:00</span>
        </div>
        <div className="hero-info-item hero-info-right">
          <span>Entry Fee : Rs.99</span>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
