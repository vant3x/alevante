import React from 'react';

const FloatingNav = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {['home', 'about', 'skills', 'projects', 'services', 'experience', 'contact'].map((section, index) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
            activeSection === section 
              ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
              : 'border-gray-500 hover:border-cyan-400'
          }`}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  );
};

export default FloatingNav;
