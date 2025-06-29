/* eslint-disable react/prop-types */
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, image, github, live, info }) {
  const handleWorkInProgressClick = () => {
    alert("Work in Progress! This link will be available soon.");
  };
  return (
    <div className="rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-purple-500/40 transition duration-300 p-4">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="rounded-md mb-4 w-full h-48 sm:h-44 xs:h-40 object-cover"
      />
      <h3 className="text-[var(--text-color)] text-xl font-semibold mb-4">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">{info}</p>
      <div className="flex justify-between">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[var(--text-color)] px-4 py-2 rounded transition border border-purple-400"
          >
            <AiFillGithub />
            GitHub
          </a>
        ) : (
          <a
            onClick={handleWorkInProgressClick}
            className="flex items-center gap-2 text-[var(--text-color)] px-4 py-2 rounded transition border border-purple-400"
          >
            <AiFillGithub />
            GitHub
          </a>
        )}
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[var(--text-color)] px-4 py-2 rounded border border-purple-400 transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        ) : (
          <a
            onClick={handleWorkInProgressClick}
            className="flex items-center gap-2 text-[var(--text-color)] px-4 py-2 rounded border border-purple-400 transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
