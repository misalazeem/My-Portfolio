import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Portfolio />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
