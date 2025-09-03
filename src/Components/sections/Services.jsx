import React from 'react';
import { services } from '../../data/portfolioData';

const Services = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
