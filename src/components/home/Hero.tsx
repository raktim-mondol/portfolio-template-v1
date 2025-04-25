import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden pt-20 pb-32"
    >
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="animate-pulse absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500 opacity-10 blur-3xl"></div>
        <div className="animate-pulse absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </motion.div>
      
      {/* Grid pattern overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-pattern"
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 lg:pr-12"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              {profileData.name}
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl text-teal-400 mb-6"
            >
              {profileData.title}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {profileData.bio}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="#research" 
                className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                View Research
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          <div className="lg:w-1/2 relative">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img 
                src={profileData.profileImage} 
                alt={profileData.name} 
                className="w-full h-auto rounded-2xl object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            </motion.div>
            
            {/* Floating card with research interests */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute -bottom-24 -left-10 bg-white text-gray-800 p-6 rounded-lg shadow-xl max-w-xs"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Research Interests</h3>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                {profileData.interests.map((interest, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center text-sm"
                  >
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    {interest}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a 
          href="#research" 
          className="flex flex-col items-center transition-colors duration-300 hover:text-teal-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-teal-400" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;