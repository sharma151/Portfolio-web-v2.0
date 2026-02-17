import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="w-full  text-(--text-color) py-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">FIND ME ON</h1>
        <p className="text-lg">
          Feel free to <span className="text-purple-400">connect</span> with me
        </p>
        <ul className="flex justify-center gap-6 text-2xl">
          <li>
            <a
              href="https://github.com/sharma151"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-color) hover:text-purple-400 transition"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/connect2saurav"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-color) hover:text-purple-400 transition"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saurav0402/"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-color) hover:text-purple-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sharma_saurav_1303/"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-color) hover:text-purple-400 transition"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialLinks;
