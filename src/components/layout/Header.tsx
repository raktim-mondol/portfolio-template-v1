import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { profileData } from '../../data/profileData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-lg md:text-xl font-semibold transition-colors duration-300">
          <span className={`transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            {profileData.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Research', 'Projects', 'Publications', 'Teaching', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm transition-colors duration-300 hover:text-teal-600 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#" 
            className={`text-sm px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-1 ${
              scrolled 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'border border-white text-white hover:bg-white hover:text-gray-900'
            }`}
          >
            <Download size={16} />
            CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-[90] bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 py-8">
          <button 
            className="absolute top-4 right-4 p-2 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          {['Home', 'Research', 'Projects', 'Publications', 'Teaching', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-xl hover:text-teal-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <Download size={16} />
            Download CV
          </a>
          
          <div className="flex space-x-6 mt-6">
            <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
              <Github size={24} />
            </a>
            <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
              <Linkedin size={24} />
            </a>
            <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;