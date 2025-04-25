import React from 'react';

interface AnimatedTitleProps {
  words: string[];
  suffix: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ words, suffix }) => {
  // Use the first word from the words array
  const displayWord = words[0];
  
  return (
    <div className="inline-flex whitespace-nowrap relative font-sans" style={{ alignItems: 'center' }}>
      {/* Just show the proper title word */}
      <span className="text-teal-400 font-bold">{displayWord}</span>
      
      {/* The suffix (last name) */}
      <span className="ml-2 font-bold">{suffix}</span>
    </div>
  );
};

export default AnimatedTitle;