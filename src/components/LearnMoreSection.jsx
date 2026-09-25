import React from 'react';
import './LearnMoreSection.css';

const LearnMoreSection = () => {
  return (
    <section className="learn-section" id="learn-more">
      {/* Decorative Star Left */}
      <img
        src="/star.png"
        alt="Decorative Star Left"
        className="learn-star-left"
      />

      <div className="learn-container">
        {/* Left Side: Person Illustration */}
        <div className="learn-person-wrapper">
          <img
            src="/person.png"
            alt="Student with Sunglasses"
            className="learn-person-img"
          />
        </div>

        {/* Right Side Content */}
        <div className="learn-content-wrapper">
          {/* Top Logo */}
          <div className="learn-logo-wrapper">
            <img
              src="/logo.png"
              alt="Uncommon Institute of Design"
              className="learn-logo-img"
            />
          </div>

          {/* Center: Tamil Typography Headline */}
          <div className="learn-text-wrapper">
            <h2 className="learn-tamil-heading">
              இன்னும் எவ்வளவோ<br />
              இருக்கு கத்துக்குறதுக்கு
            </h2>

            {/* Purple Register Now Button */}
            <div className="learn-cta-wrapper">
              <a
                href="https://luma.com/fk3rbn8c"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-register-btn"
                id="learn-register-now-btn"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Bottom Right: Contact & Address Information */}
          <div className="learn-contact-wrapper">
            <p className="learn-address">
              Address: 2nd Floor, MARK 9 Office, Chettikulam
            </p>
            <p className="learn-phone">
              Contact No : <a href="tel:9994535121">99945 35121</a>
            </p>
            <p className="learn-website">
              <a href="https://www.mark9.cc" target="_blank" rel="noopener noreferrer">
                www.MARK9.cc
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
