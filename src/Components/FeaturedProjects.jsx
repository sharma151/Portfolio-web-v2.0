/* eslint-disable react/prop-types */
import React from "react";
import ProjectCard from "@/Components/ProjectCard";

function FeaturedProjects({ heading, projects }) {
  return (
    <section className="py-16 px-6 text-[var(--text-color)] min-h-screen">
      <div className="max-w-6xl mx-auto overflow-x-visible">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
