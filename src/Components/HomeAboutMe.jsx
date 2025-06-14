/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import myImg from "@/assets/avatar.png";

function HomeAboutMe() {
  return (
    <div id="about" className="w-full py-12 text-[var(--text-color)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <motion.div
          className="md:w-2/3 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Tilt>
            <img src={myImg} alt="avatar"  />
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAboutMe;
