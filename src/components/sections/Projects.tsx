import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { researchProjects } from '../../data/profileData';
import { ResearchProject } from '../../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const categories = Array.from(new Set(researchProjects.map(project => project.category)));
  const filteredProjects = filter 
    ? researchProjects.filter(project => project.category === filter)
    : researchProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative computer vision and AI projects pushing the boundaries of what's possible.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              filter === null ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setFilter(null)}
          >
            All Projects
          </motion.button>
          
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === category ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard 
                  project={project} 
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ResearchProject;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isHovered, onHover, onLeave }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-teal-300 mb-2"
          >
            {project.category}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-white mb-2"
          >
            {project.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-300"
          >
            {project.date}
          </motion.p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-4">
          {project.links.demo && (
            <motion.a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </motion.a>
          )}
          
          {project.links.paper && (
            <motion.a 
              href={project.links.paper} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} className="mr-1" />
              Paper
            </motion.a>
          )}
          
          {project.links.github && (
            <motion.a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} className="mr-1" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;