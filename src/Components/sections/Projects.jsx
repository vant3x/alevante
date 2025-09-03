import React from 'react';
import { projects } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          FEATURED WORK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-black/80 backdrop-blur-sm border-2 ${project.color} rounded-lg overflow-hidden hover:shadow-2xl ${project.glowColor} transition-all duration-300 hover:scale-105 cursor-pointer relative`}
            >
              {/* Project Image/Icon */}
              <div className="h-32 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                <div className="absolute top-2 right-2">
                  <span className="text-xs px-2 py-1 bg-black/50 text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors duration-300">
                    <span>VIEW PROJECT</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: '6+', label: 'Major Projects', color: 'text-cyan-400' },
            { number: '15+', label: 'Technologies', color: 'text-purple-400' },
            { number: '500K+', label: 'Lines of Code', color: 'text-pink-400' },
            { number: '10+', label: 'Happy Clients', color: 'text-orange-400' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`text-2xl sm:text-3xl font-black ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
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

export default Projects;
