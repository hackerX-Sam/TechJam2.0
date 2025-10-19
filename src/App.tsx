import { useEffect, useRef, useState } from 'react';
import { Calendar, Code, Lightbulb, Trophy, Users, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-x-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Sponsors />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default App;
