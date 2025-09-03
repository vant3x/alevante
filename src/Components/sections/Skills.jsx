import React from 'react';
import { skills } from '../../data/portfolioData';
import { Code, Palette, Brain, Smartphone, Globe, Zap } from 'lucide-react';

const iconComponents = {
    Code,
    Palette,
    Brain,
    Smartphone,
    Globe,
    Zap
};

const Skills = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          TECH ARSENAL
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, index) => {
            const Icon = iconComponents[skill.icon];
            return (
              <div key={skill.name} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}
          )}
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Frontend', techs: ['React', 'Next.js', 'Angular', 'CSS','TypeScript', 'Tailwind','Bootstrap' , 'Three.js', 'Jquery'], color: 'border-cyan-400' },
            { title: 'Backend', techs: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'  ,'PHP','MongoDB', 'PostgreSQL', 'Redis'], color: 'border-green-400' },
            { title: 'Mobile and desktop', techs: ['React Native', 'Expo', 'iOS', 'Android', 'Electron', 'Tauri', 'Rust/ICED', 'PWAs', 'VB.net Windows Forms'], color: 'border-purple-400' },
            { title: 'Creative', techs: ['Blender', 'After Effects', 'Premiere', 'Photoshop', 'Cinema 4D', 'Final Cut', 'DaVinci' , ' Unreal Engine', 'Unity'], color: 'border-pink-400' }
          ].map((category, index) => (
            <div key={index} className={`bg-black/50 border-2 ${category.color} rounded-lg p-4 hover:shadow-lg hover:shadow-${category.color}/25 transition-all duration-300`}>
              <h3 className="text-lg font-bold text-white mb-3 text-center">{category.title}</h3>
              <div className="space-y-2">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="text-gray-300 text-sm text-center py-1 px-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-300">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;