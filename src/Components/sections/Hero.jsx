import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-6xl mx-auto">
        <div className="mb-8 animate-pulse">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-spin opacity-75"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">👨‍💻</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          FULL STACK
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          DIGITAL ARTIST
        </h2>
        
        <div className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 font-mono max-w-4xl mx-auto">
          <div className="typing-animation">
            Creative Developer • AI Enthusiast • 3D Artist • VFX Specialist • Interactive Experiences
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => setActiveSection('projects')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            View Projects
          </button>
          <button 
            onClick={() => setActiveSection('contact')}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-400 font-bold uppercase tracking-widest hover:bg-purple-400 hover:text-black transition-all duration-300 shadow-lg shadow-purple-400/25"
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { number: '50+', label: 'Projects' },
            { number: '5+', label: 'Years Exp' },
            { number: '20+', label: 'Technologies' },
            { number: '100%', label: 'Passion' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
