import React from 'react';
import { motion } from 'framer-motion';

interface ConceptBadge {
  icon: React.ReactNode;
  label: string;
}

interface ConceptBadgesProps {
  concepts: ConceptBadge[];
}

const ConceptBadges: React.FC<ConceptBadgesProps> = ({ concepts }) => {
  return (
    <motion.div className="flex flex-wrap mb-8 gap-6">
      {concepts.map((concept, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700"
        >
          <span className="text-teal-400">{concept.icon}</span>
          <span className="text-sm font-medium">{concept.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ConceptBadges;