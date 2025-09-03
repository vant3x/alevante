import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          LET'S CREATE MAGIC
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ready to bring your vision to life? Whether it's a cutting-edge web application, 
                immersive 3D experience, or AI-powered solution, let's discuss how we can make it happen.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'alejandrovelasquezmolina@gmail.com', color: 'text-cyan-400' },
                  { icon: <Github className="w-6 h-6" />, title: 'GitHub', value: '@vant3x', color: 'text-green-400' },
                  { icon: <Linkedin className="w-6 h-6" />, title: 'LinkedIn', value: '/in/alevantem', color: 'text-blue-400' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all duration-300 cursor-pointer group">
                    <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{contact.title}</h4>
                      <p className={`${contact.color} font-mono`}>{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Response Time', value: '< 24h', color: 'from-green-400 to-emerald-500' },
                { label: 'Project Success', value: '100%', color: 'from-blue-400 to-cyan-500' },
                { label: 'Client Satisfaction', value: '5.0★', color: 'from-yellow-400 to-orange-500' },
                { label: 'Availability', value: 'Open', color: 'from-purple-400 to-pink-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-black/30 rounded-lg">
                  <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300">
                  <option>Web Development</option>
                  <option>Backend Development</option>
                  <option>Mobile App</option>
                  <option>3D/VFX Project</option>
                  <option>AI Integration</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
