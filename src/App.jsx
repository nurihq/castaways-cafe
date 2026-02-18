import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuGrid from './components/MenuGrid';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <div id="menu" className="py-16 bg-gray-50">
        <MenuGrid />
      </div>
      <div id="about" className="py-16">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
