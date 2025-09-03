import React from 'react';

const About = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          ABOUT ME
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I'm a passionate <span className="text-cyan-400 font-semibold">full-stack developer</span> and <span className="text-purple-400 font-semibold">digital artist</span> who bridges the gap between technology and creativity. With over 5 years of experience, I specialize in creating immersive digital experiences that push the boundaries of what's possible.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                My journey spans from building scalable web applications to crafting stunning 3D visualizations and implementing AI-powered solutions. I believe that the best digital experiences happen at the intersection of <span className="text-pink-400 font-semibold">beautiful design</span>, <span className="text-orange-400 font-semibold">cutting-edge technology</span>, and <span className="text-green-400 font-semibold">human-centered thinking</span>.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not coding or creating, you'll find me experimenting with new AI models, exploring the latest in WebXR, or pushing pixels in Blender and After efefcts to create the next mind-bending visual experience.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎨', title: 'Creative Vision', desc: 'Unique aesthetic approach' },
                { icon: '⚡', title: 'Fast Execution', desc: 'Rapid prototyping & delivery' },
                { icon: '🚀', title: 'Innovation Focus', desc: 'Always using latest tech' },
                { icon: '🤝', title: 'Collaborative', desc: 'Great communication skills' }
              ].map((trait, index) => (
                <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300 text-center group cursor-pointer">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{trait.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-1">{trait.title}</h3>
                  <p className="text-xs text-gray-400">{trait.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Currently Exploring</h3>
              <div className="space-y-2">
                {['Web and Mobile development', 'Web Assembly and high performance projects', 'Clean architecture and DDD', 'Computer vision', 'Automatas and Turing machines' ,'WebXR & Immersive Experiences', 'Creative code and generative Art( Sonic PI, p5js, ThreeJS)', 'Real-time Rendering Techniques', 'LLMs APIs integrations,  Agents (Landgraph, LangChain) and workflow integration to n8n','Desktop software in Rust', 'Blockchain Integration'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
