import React from 'react';
import Header from './Header';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container" id="hero">
      {/* Left Ornate Border Pillar */}
      <img
        src="/left.png"
        alt="Decorative Left Border"
        className="hero-border-left"
      />

      {/* Top Header with Centered Logo */}
      <Header />

      {/* Center Event Branding */}
      <div className="hero-main">
        {/* Main MAKKA DESIGN PAKKA Logo */}
        <div className="hero-badge-wrapper">
          <img
            src="/herologo.png"
            alt="MAKKA DESIGN PAKKA"
            className="hero-title-img"
          />
        </div>

        {/* Date Ticket Stamp */}
        <img
          src="/date.png"
          alt="03 October 2026 - Registration Fee : ₹99"
          className="hero-date-badge"
        />

        {/* Venue Information Line */}
        <p className="hero-venue-text">
          <strong>Venue:</strong> 2nd Floor, MaRK 9 Office, Chettikulam
        </p>

        {/* Purple Rounded Register Now Button */}
        <a
          href="https://luma.com/fk3rbn8c"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-register-btn"
          id="hero-register-now-btn"
        >
          Register Now
        </a>
      </div>

      {/* Right Ornate Border Pillar */}
      <img
        src="/right.png"
        alt="Decorative Right Border"
        className="hero-border-right"
      />
    </section>
  );
};

export default HeroSection;
