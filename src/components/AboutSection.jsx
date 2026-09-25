import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-frame-wrapper">
        {/* Decorative Frame from public/frame.png */}
        <img
          src="/frame.png"
          alt="Decorative Frame"
          className="about-frame-overlay"
        />

        <div className="about-content">
          <p className="about-text">
            Uncommon Institute of Design, an initiative by{' '}
            <strong className="about-highlight">MaRK9</strong>, is a place for curious minds to explore
            through experimentation, get guidance from experienced designers, and grow more
            confident in their ideas. With <strong className="about-highlight">MaRK9’s</strong>{' '}
            support and community to keep exploring, try new things, and discover where your
            creativity can take you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
