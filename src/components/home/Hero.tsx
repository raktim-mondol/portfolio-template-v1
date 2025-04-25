import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, Brain, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import AnimatedTitle from './AnimatedTitle';
import HeroBackground from './HeroBackground';
import ConceptBadges from './ConceptBadges';

// Define the AI concepts array that will be displayed in the Hero section
const aiConcepts = [
  { icon: <Zap size={18} />, label: "Deep Learning" },
  { icon: <Brain size={18} />, label: "Neural Networks" },
  { icon: <BarChart2 size={18} />, label: "Data Analysis" }
];

const Hero: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [typingText, setTypingText] = useState('');

  // Title animation words
  const titleWords = ['Dr.', 'Dreamer.', 'Designer.', 'Developer.', 'Discoverer.'];
  const nameWithoutPrefix = profileData.name.split(" ").slice(1).join(" ");
  
  // PyTorch multi-GPU LLM training code for background animation
  const pythonCode = `
# Training loop with progress display
loss_history = []
for epoch in range(training_args.num_train_epochs):
    print(f"[GPU {local_rank}] Starting Epoch {epoch+1}/{training_args.num_train_epochs}")
    print(f"[{'=' * 5}{' ' * 15}] 5%")
    time.sleep(0.2)
    
    # Simulate batch iterations with progress updates
    for i in range(10):
        # Simulate progress updates
        progress = min(100, (i+1) * 10)
        filled = int(progress / 5)
        empty = 20 - filled
        
        # Simulate different losses for GPUs to show parallelism
        loss_val = 4.5678 - (epoch * 0.5) - (i * 0.2) + (local_rank * 0.01)
        if loss_val < 0.5: 
            loss_val = 0.5 + (local_rank * 0.01)
            
        # Show current training metrics with progress bar
        if dist.get_rank() == 0:
            print(f"[{'=' * filled}{' ' * empty}] {progress}% | Loss: {loss_val:.4f} | lr: {5e-5:.2e} | GPU Memory: {torch.cuda.max_memory_allocated(device)/1024**3:.1f}GB | Step: {i+1}/10")
            if progress < 100:
                print(f"GPU 0: Processing batch {i+1}/10 | Loss: {loss_val:.4f}")
                time.sleep(0.15)
                print(f"GPU 1: Processing batch {i+1}/10 | Loss: {loss_val+0.01:.4f}")
                time.sleep(0.12)
                print(f"GPU 2: Processing batch {i+1}/10 | Loss: {loss_val+0.02:.4f}")
                time.sleep(0.18)
                print(f"GPU 3: Processing batch {i+1}/10 | Loss: {loss_val+0.03:.4f}")
    
    # End of epoch stats
    avg_loss = 4.5678 - (epoch * 0.8)
    if avg_loss < 0.6: avg_loss = 0.6
    print(f"\n[GPU 0] Epoch {epoch+1} completed - Average Loss: {avg_loss:.4f}")
    print(f"[GPU 1] Epoch {epoch+1} completed - Average Loss: {avg_loss+0.01:.4f}")
    
    # Save checkpoint
    if dist.get_rank() == 0:
        print(f">> Saving model checkpoint for epoch {epoch+1}")
        print(f">> Training speed: {8192/(epoch+1):.1f} tokens/sec/GPU\n")

print(">> Training completed successfully")
print(">> Done!"
`;

  const typingSpeed = 5; // Faster for code to make it look more like real output

  // Update dimensions for responsive design
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle the typing animation effect for code
  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= pythonCode.length) {
        setTypingText(pythonCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset to beginning after a delay to create continuous effect
        setTimeout(() => {
          currentIndex = 0;
          setTypingText('');
        }, 2000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden pt-20 pb-32"
    >
      {/* Background animations and effects */}
      <HeroBackground dimensions={dimensions} typingText={typingText} />
      
      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            className="lg:w-3/5 lg:pr-12"
          >
            {/* Animated title with expanding text effect */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 flex items-center"
            >
              <AnimatedTitle 
                words={titleWords} 
                suffix={nameWithoutPrefix} 
              />
            </motion.h1>

            <motion.h2 
              className="text-xl md:text-2xl text-teal-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {profileData.title}
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {profileData.bio}
            </motion.p>
            
            {/* AI concept badges */}
            <ConceptBadges concepts={aiConcepts} />

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a 
                href="#research" 
                className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Research
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-5 py-2 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile image and interests card */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img 
                src={profileData.profileImage} 
                alt={profileData.name} 
                className="w-full h-auto rounded-2xl object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-20 -left-10 bg-white text-gray-800 p-5 rounded-lg shadow-xl max-w-xs"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Research Interests</h3>
              <motion.ul 
                className="space-y-1"
              >
                {profileData.interests.map((interest, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
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
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.a 
          href="#research" 
          className="flex flex-col items-center transition-colors duration-300 hover:text-teal-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-teal-400" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;