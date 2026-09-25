import './App.css';
import Preloader from './components/Preloader';
import Home from './pages/Home';

function App() {
  return (
    <main className="app-container">
      <Preloader />
      <Home />
    </main>
  );
}

export default App;
