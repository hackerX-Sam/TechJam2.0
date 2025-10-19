import { useEffect, useRef, useState } from 'react';
import { Calendar, Code, Lightbulb, Trophy, Users, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
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
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-blue-950 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />

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
