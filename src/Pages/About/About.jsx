import React from "react";
import Techstack from "./Partials/Techstack";
import EducationRoadmap from "@/Components/EducationRoadmap";
import { DiJavascript1, DiReact, DiGit, DiSass } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAntdesign,
  SiReactquery,
  SiTypescript,
  SiHtml5,
  SiPostman,
  SiJupyter,
  SiHeroku,
  SiReactrouter
} from "react-icons/si";
import { AiOutlineSlack } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

import { IoLogoGitlab } from "react-icons/io5";
import { FaGithub, FaUbuntu, FaWindows } from "react-icons/fa";
import GithubCalendar from "./Partials/GithubCalender";
import AboutCard from "./Partials/AboutCard";

const About = () => {
  const TechskillIcons = [
    SiHtml5,
    SiTailwindcss,
    DiSass,
    DiJavascript1,
    SiTypescript,
    DiReact,
    SiReactrouter,
    SiReactquery,
    DiGit,
    FaVuejs,
    SiAntdesign,
  ];
  const ToolskillIcons = [
    FaWindows,
    FaUbuntu,
    VscVscode,
    FaGithub,
    SiPostman,
    SiJupyter,
    SiHeroku,
    IoLogoGitlab,
    AiOutlineSlack,
  ];

  return (
    <div>
      <AboutCard />
      <Techstack heading="Professional Skillset" icons={TechskillIcons} />
      <Techstack heading="Tools i use" icons={ToolskillIcons} />
      <EducationRoadmap />
      <GithubCalendar />
    </div>
  );
};

export default About;
