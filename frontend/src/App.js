import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import RegisterCTA from './components/RegisterCTA';
import SoundControl from './components/SoundControl';

function App() {
  return (
    <div className="App">
      <SoundControl />
      <HeroSection />
      <EventsSection />
      <RegisterCTA />
    </div>
  );
}

export default App;
