/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/Components/ProjectCard";

function FeaturedProjects({ heading, projects }) {
  return (
    <motion.section
      className=" py-16 px-6 text-[var(--text-color)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">
          {heading}
        </h2>

        {/* Just a normal div, no motion.div here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedProjects;
