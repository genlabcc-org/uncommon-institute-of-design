import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 300);
          setTimeout(() => setIsRemoved(true), 950);
          return 100;
        }
        // Smooth organic progress step
        const step = Math.floor(Math.random() * 6) + 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  return (
    <div className={`preloader-container ${isLoaded ? 'loaded' : ''}`} aria-hidden={isLoaded}>
      <div className="preloader-content">
        {/* Animated Brand Logo with White-to-Color Fill */}
        <div className="preloader-logo-wrapper">
          {/* Base Layer: White Logo */}
          <img 
            src="/herologo.png" 
            alt="MAKKA DESIGN PAKKA" 
            className="preloader-logo preloader-logo-white"
          />

          {/* Top Layer: Original Full Color Logo, filled in sync with progress */}
          <div 
            className="preloader-logo-fill-layer"
            style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
          >
            <img 
              src="/herologo.png" 
              alt="MAKKA DESIGN PAKKA" 
              className="preloader-logo preloader-logo-color"
            />
          </div>
        </div>

        {/* Comic Progress Bar */}
        <div className="preloader-progress-box">
          <div 
            className="preloader-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status / Percentage readout */}
        <div className="preloader-status">
          <span className="preloader-tag">Designing...</span>
          <span className="preloader-percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
