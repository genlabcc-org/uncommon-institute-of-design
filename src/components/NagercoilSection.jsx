import React from 'react';
import './NagercoilSection.css';

const NagercoilSection = () => {
  return (
    <section className="city-section" id="nagercoil">
      <div className="city-container">
        {/* Left: Typography Content */}
        <div className="city-text-wrapper">
          <p className="city-subheading">
            something uncommon<br />
            is coming to
          </p>
          <h2 className="city-main-heading">
            NAGERCOIL
          </h2>
        </div>

        {/* Right Bottom: Landmark Graphic */}
        <div className="city-image-wrapper">
          <img 
            src="/kk.png" 
            alt="Nagercoil Landmarks Illustration" 
            className="city-landmark-img"
          />
        </div>
      </div>
    </section>
  );
};

export default NagercoilSection;
