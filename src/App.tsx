import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Hackathon from './components/Hackathon';
import TeamExperts from './components/TeamExperts';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth-scroll">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Programs />
      <Impact /> 
      <Hackathon />
      <TeamExperts />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;