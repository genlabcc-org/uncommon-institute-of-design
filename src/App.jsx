import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <main className="app-container">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <FaqSection />
    </main>
  );
}

export default App;
