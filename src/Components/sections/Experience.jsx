import React from 'react';
import { experiences } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
          JOURNEY
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 group relative">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              
              <div className="ml-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-gray-400 mb-2">{exp.company}</h4>
                  </div>
                  <span className={`text-sm font-mono ${exp.color} px-3 py-1 bg-black/50 rounded-full`}>
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Line */}
        <div className="absolute left-8 top-32 bottom-32 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-50"></div>
      </div>
    </section>
  );
};

export default Experience;
