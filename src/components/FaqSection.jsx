import React, { useState } from 'react';
import './FaqSection.css';

const FAQ_DATA = [
  {
    question: 'Do I need any prior design experience?',
    answer: 'No. The event is open to curious minds at every skill level.',
  },
  {
    question: 'Who can attend this event?',
    answer: 'Anyone interested in design is welcome, including students, beginners, and aspiring creatives.',
  },
  {
    question: 'How long will the event last?',
    answer: 'The event will run for 2 hours. Check the event schedule for timings.',
  },
  {
    question: 'How do I join the event?',
    answer: 'Register through the registration link / button. We’ll share the event details with you after you sign up.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes. You’ll receive an e-certificate after the event.',
  },
  {
    question: 'Can I join if I’m a beginner?',
    answer: 'Absolutely. You can join with no experience—just bring your curiosity and willingness to learn.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Character Illustration */}
        <div className="faq-person-wrapper">
          <img 
            src="/faqperson.png" 
            alt="FAQ Presenter" 
            className="faq-person-img"
          />
        </div>

        {/* Right FAQ Content & Accordions */}
        <div className="faq-content">
          <h2 className="faq-title">Your Questions Answered</h2>

          <div className="faq-list">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-chevron ${isOpen ? 'open' : ''}`}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
