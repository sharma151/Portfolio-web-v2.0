/* eslint-disable no-unused-vars */
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 mx-auto max-w-xl border border-white/10 shadow-lg transition hover:shadow-2xl hover:scale-[1.01] duration-300"
      initial={{ opacity: 0, y: 50 }} // Starting position (invisible and 50px below)
      whileInView={{ opacity: 1, y: 0 }} // Animation on scroll into view
      viewport={{ once: true }} // Trigger animation only once
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      <div className="text-white">
        <p className="text-base md:text-lg leading-relaxed md:leading-relaxed text-gray-300 md:text-justify">
          Hi, I'm{" "}
          <span className="text-purple-400 font-semibold">Saurav Sharma</span>{" "}
          from{" "}
          <span className="text-purple-400 font-semibold">
            Darbhanga, India
          </span>{" "}
          🇮🇳.
          <br />
          <br />
          I'm a passionate Frontend Developer at{" "}
          <span className="text-purple-300 font-semibold">
            Young Innovation Pvt. Ltd., Nepal
          </span>{" "}
          🇳🇵, where I specialize in building secure, scalable, and user-centric
          web applications. With a background in Computer Science Engineering
          and a deep interest in cybersecurity 🔒, I love crafting digital
          experiences that solve real-world challenges.
          <br />
          <br />
          Over the years, I've gained hands-on experience in cybersecurity, web
          development, software engineering, and testing. My internships with
          organizations like{" "}
          <span className="text-purple-300 font-semibold">
            All India IT Association
          </span>
          ,{" "}
          <span className="text-purple-300 font-semibold">
            MP Police Cyber Cell
          </span>
          ,{" "}
          <span className="text-purple-300 font-semibold">
            Persistent Systems
          </span>
          , and{" "}
          <span className="text-purple-300 font-semibold">Oasis Infobyte</span>{" "}
          sharpened my technical skills and problem-solving mindset 🧠.
          <br />
          <br />
          I've also strengthened my expertise through certifications like the{" "}
          <span className="text-purple-300 font-semibold">
            IBM Cybersecurity Professional Certification
          </span>{" "}
          and the{" "}
          <span className="text-purple-300 font-semibold">
            Meta Frontend Development Program
          </span>
          .
          <br />
          <br />
          I'm a strong believer in continuous learning 🌱 and innovation, aiming
          to create meaningful impact through technology.
        </p>

        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-300 text-center">
            Things I ❤️ Besides Coding
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li className="flex items-start">
              <ImPointRight className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              Playing Games 🎮
            </li>
            <li className="flex items-start">
              <ImPointRight className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              Listening to Music 🎵
            </li>
            <li className="flex items-start">
              <ImPointRight className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              Hiking / Trekking ⛰️
            </li>
          </ul>
        </div>

        <p className="mt-8 md:mt-10 text-center italic text-purple-400 text-base md:text-lg">
          "Strive to build things that make a difference ✨"
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
