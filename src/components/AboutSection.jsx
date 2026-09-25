import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            Uncommon Institute of Design, an initiative by{' '}
            <strong className="about-highlight">MaRK9</strong>, is a place for curious minds to explore
            through experimentation, get guidance from experienced designers, and grow more
            confident in their ideas. With Mark9’s support and community to keep exploring, try new
            things, and discover where your creativity can take you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
