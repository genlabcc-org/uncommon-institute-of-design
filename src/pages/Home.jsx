import React from 'react';
import HeroSection from '../components/HeroSection';
import NagercoilSection from '../components/NagercoilSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <NagercoilSection />
      <AboutSection />
      <FaqSection />
    </div>
  );
};

export default Home;
