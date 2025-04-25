import React from 'react';
import { motion } from 'framer-motion';
import NeuralAnimation from '../../utils/NeuralAnimation';

interface HeroBackgroundProps {
  dimensions: {
    width: number;
    height: number;
  };
  typingText: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ dimensions, typingText }) => {
  return (
    <>
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0"></div>
      
      {/* Full-screen code background layer */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 font-mono text-xs md:text-sm overflow-hidden">
          <div className="p-8 w-full h-full">
            <pre className="text-green-500 opacity-20 whitespace-pre-wrap break-all">
              <code>{typingText}</code>
              <span className="inline-block animate-pulse">▌</span>
            </pre>
          </div>
        </div>
      </div>

      {/* Neural network animation overlay */}
      <div className="absolute inset-0 opacity-30 z-20">
        <NeuralAnimation
          width={dimensions.width}
          height={dimensions.height}
          neuronCount={100}
          color="#4FD1C5"
          maxConnections={5}
          interactive={true}
          mouseRadius={180}
          pulseEnabled={true}
        />
      </div>

      {/* Gradient overlays for better text contrast */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden z-30"
      >
        <div className="animate-pulse absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-teal-500 opacity-10 blur-3xl"></div>
        <div className="animate-pulse absolute bottom-1/3 right-1/3 w-120 h-120 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </motion.div>
      
      {/* Grid pattern overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-pattern z-40"
      ></motion.div>
    </>
  );
};

export default HeroBackground;