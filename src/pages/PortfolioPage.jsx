import React, { useState, useEffect } from 'react';
import ThreeCanvas from '../components/three/ThreeCanvas';
import Cursor from '../components/common/Cursor';
import LoadingScreen from '../components/common/LoadingScreen';
import Header from '../components/common/Header';
import FloatingNav from '../components/common/FloatingNav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ThreeCanvas />
      <Cursor mobileMenuOpen={mobileMenuOpen} />
      <LoadingScreen isLoaded={isLoaded} />
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'home' && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
