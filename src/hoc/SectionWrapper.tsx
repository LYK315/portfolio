import { motion } from 'framer-motion';
import React from 'react';

// Define the types for Component and idName
export default function SectionWrapper(TargetComponent: React.FC, idName: string) {
  const HOC: React.FC = () => {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Insert Span to navigate sections perfectly */}
        <span id={idName}></span>
        <TargetComponent />
      </motion.div>
    );
  };

  return HOC;
};