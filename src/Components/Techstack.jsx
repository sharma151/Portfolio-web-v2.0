import React from "react";
import { DiJavascript1, DiReact, DiGit, DiSass } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAntdesign,
  SiReactquery,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";

const icons = [
  SiHtml5,
  SiTailwindcss,
  DiSass,
  DiJavascript1,
  SiTypescript,
  DiReact,
  SiReactquery,
  DiGit,
  FaVuejs,
  SiAntdesign,
];

function Techstack() {
  return (
    <div className=" techstack  px-4 w-[70%] m-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
        Professional <span className="text-[#b562d6]">Skillset</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="p-6 w-24 h-24 bg-black border border-[#b562d6] rounded-lg shadow-md flex items-center justify-center text-white text-4xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#b562d6]"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
