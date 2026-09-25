import React from 'react';
import './AboutSection.css';

const QuoteIconTop = () => (
  <svg className="about-quote-svg quote-top-left" viewBox="0 0 64 54" fill="#ffd200" stroke="#000000" strokeWidth="4.5" strokeLinejoin="round">
    <path d="M 6 26 C 6 12, 16 6, 28 6 L 28 18 C 21 18, 18 21, 18 27 L 28 27 L 28 48 L 6 48 Z M 36 26 C 36 12, 46 6, 58 6 L 58 18 C 51 18, 48 21, 48 27 L 58 27 L 58 48 L 36 48 Z" />
  </svg>
);

const QuoteIconBottom = () => (
  <svg className="about-quote-svg quote-bottom-right" viewBox="0 0 64 54" fill="#ffd200" stroke="#000000" strokeWidth="4.5" strokeLinejoin="round">
    <path d="M 6 6 L 28 6 L 28 26 C 28 38, 18 44, 6 48 L 6 34 C 13 32, 16 29, 16 26 L 6 26 Z M 36 6 L 58 6 L 58 26 C 58 38, 48 44, 36 48 L 36 34 C 43 32, 46 29, 46 26 L 36 26 Z" />
  </svg>
);

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left: About Us Comic Art Logo (Positioned towards top-left) */}
        <div className="about-logo-wrapper">
          <img 
            src="/about.png" 
            alt="About Us" 
            className="about-logo-img"
          />
        </div>

        {/* Right: Comic Quote Box */}
        <div className="about-content-wrapper">
          {/* Outer Black Accent Frame */}
          <div className="about-outer-frame"></div>

          {/* Dotted Accents */}
          <div className="dot-grid dots-left">
            {[...Array(8)].map((_, i) => (
              <span key={`l-${i}`} className="dot"></span>
            ))}
          </div>
          <div className="dot-grid dots-right">
            {[...Array(8)].map((_, i) => (
              <span key={`r-${i}`} className="dot"></span>
            ))}
          </div>

          {/* Main Yellow Card */}
          <div className="about-card">
            {/* Yellow & Black Outline Quote - Top Left */}
            <QuoteIconTop />

            {/* Top Dot Matrix Accent */}
            <div className="dot-grid dots-top">
              {[...Array(12)].map((_, i) => (
                <span key={`t-${i}`} className="dot"></span>
              ))}
            </div>

            {/* Text Content */}
            <p className="about-text">
              Uncommon Institute of Design, an initiative by{' '}
              <span className="mark9-highlight">Mark9</span>, is a place for curious minds to explore through experimentation, get guidance from experienced designers, and grow more confident in their ideas. With Mark9’s support and community to keep exploring, try new things, and discover where your creativity can take you.
            </p>

            {/* Bottom Dot Matrix Accent */}
            <div className="dot-grid dots-bottom">
              {[...Array(16)].map((_, i) => (
                <span key={`b-${i}`} className="dot"></span>
              ))}
            </div>

            {/* Yellow & Black Outline Quote - Bottom Right */}
            <QuoteIconBottom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
