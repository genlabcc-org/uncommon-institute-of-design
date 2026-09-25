import React from 'react';
import HeroSection from '../components/HeroSection';
import NagercoilSection from '../components/NagercoilSection';
import AboutSection from '../components/AboutSection';
import LearnMoreSection from '../components/LearnMoreSection';
import FaqSection from '../components/FaqSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <NagercoilSection />
      <AboutSection />
      <LearnMoreSection />
      {/* <FaqSection /> */}
    </div>
  );
};

export default Home;
