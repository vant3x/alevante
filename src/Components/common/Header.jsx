import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, setActiveSection, mobileMenuOpen, toggleMobileMenu }) => {
  const navigateToSection = (section) => {
    setActiveSection(section);
    toggleMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-lg border-b border-cyan-400/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            &lt;Alevante&gt;
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'services', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm uppercase tracking-widest transition-all cursor-pointer duration-300 hover:text-cyan-400 relative ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-400'
                }`}
              >
                {section}
                {activeSection === section && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => toggleMobileMenu(!mobileMenuOpen)}
            className="md:hidden p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-cyan-400/20 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container mx-auto px-6 py-4 space-y-4">
          {['home', 'about', 'skills', 'projects', 'services', 'experience', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => navigateToSection(section)}
              className={`block w-full text-left text-lg uppercase tracking-widest transition-all duration-300 hover:text-cyan-400 py-2 ${
                activeSection === section ? 'text-cyan-400 border-l-2 border-cyan-400 pl-4' : 'text-gray-400'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
