import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profileData';
import NeuralAnimation from '../../utils/NeuralAnimation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [dimensions, setDimensions] = useState({ width: 0, height: 400 });

  useEffect(() => {
    const updateWidth = () => {
      setDimensions({
        width: window.innerWidth,
        height: 400
      });
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Enhanced Neural Network Animation - Fix opacity with valid Tailwind class */}
      <div className="absolute inset-0 opacity-20">
        <NeuralAnimation
          width={dimensions.width}
          height={dimensions.height}
          neuronCount={60}
          color="#4FD1C5"
          maxConnections={4}
          interactive={true}
          mouseRadius={120}
          pulseEnabled={true}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-400" />
                <a href={`mailto:${profileData.email}`} className="hover:text-teal-400 transition-colors">
                  {profileData.email}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Research', 'Projects', 'Publications', 'Teaching'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Academic Profiles */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Academic Profiles</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={profileData.socialLinks.googleScholar} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Google Scholar
                </a>
              </li>
              <li>
                <a 
                  href={profileData.socialLinks.researchGate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  ResearchGate
                </a>
              </li>
              <li>
                <a 
                  href={profileData.socialLinks.orcid} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  ORCID
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href={profileData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={profileData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={profileData.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;