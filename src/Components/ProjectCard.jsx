import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, image, github, live, info }) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-purple-500/40 transition duration-300 p-4">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{info}</p>
      <div className="flex justify-between">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-purple-500 transition border border-purple-600"
        >
          <AiFillGithub />
          GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded border border-purple-600 hover:bg-purple-700 transition"
        >
          <FaExternalLinkAlt />
          Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
