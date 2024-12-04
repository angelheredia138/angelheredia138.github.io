import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
