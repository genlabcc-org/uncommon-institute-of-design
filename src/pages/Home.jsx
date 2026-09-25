import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import QuoteSection from '../components/QuoteSection';
import FaqSection from '../components/FaqSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <FaqSection />
    </div>
  );
};

export default Home;
