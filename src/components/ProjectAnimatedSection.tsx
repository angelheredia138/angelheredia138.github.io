import React from "react";
import { motion } from "framer-motion";

interface ProjectsAnimatedSectionProps {
  children: React.ReactNode;
  id: string;
}

const ProjectsAnimatedSection: React.FC<ProjectsAnimatedSectionProps> = ({
  children,
  id,
}) => {
  return (
    <motion.section
      id={id}
      className="min-h-[65vh] flex items-center justify-center mb-2" // Reduced height and margin
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default ProjectsAnimatedSection;
