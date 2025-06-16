import FeaturedProjects from "@/Components/FeaturedProjects";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: null,
      live: null,
      info: "A sleek and responsive portfolio website built with React.js, styled using Tailwind CSS, and enhanced with smooth animations via Framer Motion. Showcases best practices in React component reusability and clean, maintainable code architecture.",
    },
    {
      title: "Social media platform",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      info: "A full-featured social media platform built with React, implementing user authentication, photo posting, user search, and profile management. Utilizes Context API, Redux, React Hooks, component-based architecture, API integration with interceptors, and best practices for scalable, professional-grade development.",
    },
    {
      title: "InfoSnap",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      info: "A versatile  InfoSnap generator hub built with React and styled using Sass/SCSS, allowing users to create barcodes, QR codes, and digital business cards by simply entering their data. Designed for ease of use with a clean, responsive interface.",
    },
    {
      title: "Giphy Search application",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      info: "A Giphy search app that lets users find and browse GIFs using the Giphy API. Built with Firebase authentication for secure user login, it allows users to save and manage their favorite GIFs seamlessly.",
    },
    {
      title: "Task Schedular",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      info: "A task scheduler application built with TypeScript, React, and Tailwind CSS. Allows users to create, edit, delete, and save tasks based on specific dates. Designed with a clean UI and structured for scalability and maintainability.",
    },
    {
      title: "Calculator",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      info: "A modern calculator built with HTML, CSS, and JavaScript featuring a clean, responsive UI. Supports basic arithmetic operations with smooth user interactions and a sleek, intuitive design for an enhanced user experience.",
    },
    {
      title: "Weather application",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      info: "A weather application built with JavaScript, HTML, and CSS that fetches real-time weather data from a free weather API, providing users with up-to-date weather forecasts in a clean and user-friendly interface.",
    },
  ];
  return (
    <div>
      <FeaturedProjects heading="Projects" projects={projects} />
    </div>
  );
};

export default Projects;
