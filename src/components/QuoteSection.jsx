import React from 'react';
import './QuoteSection.css';

const QuoteSection = () => {
  return (
    <section className="quote-section" id="quote">
      <div className="quote-container">
        <div className="quote-banner-wrapper">
          {/* Pink offset shadow */}
          <div className="quote-banner-shadow"></div>

          {/* Yellow Banner */}
          <div className="quote-banner">
            <div className="quote-content">
              <p className="quote-line">
                You Cannot <span className="highlight-red">Understand</span> Good Design.
              </p>
              <p className="quote-line">
                If You Cannot Understand <span className="highlight-red">People</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
