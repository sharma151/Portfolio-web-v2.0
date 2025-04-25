import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "@/assets/avatar.png"; // Adjust the path as necessary

function AboutMe() {
  return (
    <div id="about" className="w-full py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold">
            LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
          </h1>
          <p className="text-lg leading-relaxed">
            I am a tech enthusiast, passionate about programming and developing
            innovative solutions 🤷‍♂️
            <br />
            <br />I am fluent in classics like{" "}
            <span className="text-purple-400 font-semibold">
              C++, Javascript.
            </span>
            <br />
            <br />
            My field of interest includes building new{" "}
            <span className="text-purple-400 font-semibold">
              Web Technologies and Products
            </span>
            , and exploring{" "}
            <span className="text-purple-400 font-semibold">
              cybersecurity.
            </span>
            <br />
            <br />I love working with{" "}
            <span className="text-purple-400 font-semibold">Node.js</span> and
            modern JavaScript libraries like{" "}
            <span className="text-purple-400 font-semibold">React.js</span> and{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>.
          </p>
        </div>
        <div className="md:w-1/3">
          <Tilt>
            <img src={myImg} alt="avatar" className="rounded-xl shadow-lg" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
