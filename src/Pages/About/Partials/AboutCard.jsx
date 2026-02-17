import React from "react";

import laptopImg from "@/assets/about.png"; // your main image
import extraImg1 from "@/assets/aboutimg2.png"; // example new image
import extraImg2 from "@/assets/aboutimg3.png"; // example new image
import AboutMe from "./AboutMe";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-6 py-14 md:py-24 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="md:w-7/12 flex flex-col justify-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center  text-(--text-color)">
          Know Who <span className="text-purple-400">I&apos;M 🚀</span>
        </h1>

        <AboutMe />
      </div>

      {/* Right Section */}
      <div className="md:w-5/12 flex flex-col items-center pt-4 md:pt-20 space-y-8 mx-auto">
        {/* Main Image */}
        <img
          src={laptopImg}
          alt="About Main"
          className="w-72 hidden md:flex md:w-96 object-contain animate-float rounded-lg shadow-lg "
        />

        <img
          src={extraImg1}
          alt="Extra 1"
          className="w-72 md:w-96 h-full md:h-full object-contain animate-float rounded-lg shadow-lg "
        />
        <img
          src={extraImg2}
          alt="Extra 2"
          className="w-72 md:w-96 h-full md:h-full object-contain animate-float rounded-lg shadow-lg "
        />
        {/* You can add more images if needed */}
      </div>
    </div>
  );
}

export default About;
