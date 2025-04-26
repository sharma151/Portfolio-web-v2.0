import React from "react";
import ProjectCard from "@/Components/ProjectCard";

// Sample project data
const projects = [
  {
    title: "My Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/your-username/portfolio",
    live: "https://yourportfolio.live",
    info: "This is my personal portfolio website where I showcase my projects and skills.",
  },
  {
    title: "Blog Platform",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/your-username/blog-app",
    live: "https://yourblogapp.live",
    info: "A blogging platform where users can create, read, and comment on posts.",
  },
  {
    title: "Blog Platform",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/your-username/blog-app",
    live: "https://yourblogapp.live",
    info: "A blogging platform where users can create, read, and comment on posts.",
  },
  {
    title: "Blog Platform",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/your-username/blog-app",
    live: "https://yourblogapp.live",
    info: "A blogging platform where users can create, read, and comment on posts.",
  },
];

function FeaturedProjects() {
  return (
    <section className="bg-gray-950 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
