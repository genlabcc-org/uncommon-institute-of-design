import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    let animationFrameId;
    const duration = 1800; // 1.8s smooth loading
    const startTime = performance.now();

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const linearRatio = Math.min(elapsed / duration, 1);
      const easedProgress = Math.min(Math.round(easeInOutQuad(linearRatio) * 100), 100);

      setProgress(easedProgress);

      if (linearRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Trigger split opening
        setTimeout(() => setIsLoaded(true), 250);
        // Remove from DOM after curtain slide finishes
        setTimeout(() => setIsRemoved(true), 1200);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isRemoved) return null;

  // Render the preloader content template
  const renderPreloaderContent = () => (
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
  );

  return (
    <div className={`preloader-wrapper ${isLoaded ? 'loaded' : ''}`} aria-hidden={isLoaded}>
      {/* Left Curtain / Door (Contains Left 50% Slice of Everything) */}
      <div className="preloader-curtain preloader-curtain-left">
        <div className="preloader-stage preloader-stage-left">
          {renderPreloaderContent()}
        </div>
      </div>

      {/* Right Curtain / Door (Contains Right 50% Slice of Everything) */}
      <div className="preloader-curtain preloader-curtain-right">
        <div className="preloader-stage preloader-stage-right">
          {renderPreloaderContent()}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
