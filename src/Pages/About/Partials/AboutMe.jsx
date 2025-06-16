/* eslint-disable no-unused-vars */
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 mx-auto max-w-xl border border-white/10 shadow-lg transition hover:shadow-2xl hover:scale-[1.01] duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-[var(--text-color)]">
        <p className="text-base md:text-lg leading-relaxed md:leading-relaxed text-[var(--text-color)] md:text-justify">
          Hello, I&apos;m{" "}
          <span className="text-purple-400 font-semibold">Saurav Sharma</span>{" "}
          from{" "}
          <span className="text-purple-400 font-semibold">
            Darbhanga, India.
          </span>{" "}
          
          <br />
          <br />I work as a Frontend Developer at{" "}
          <span className="text-purple-400 font-semibold">
            Young Innovation Pvt. Ltd., Nepal
          </span>{" "}
           focusing on developing secure, scalable, and user-friendly web
          applications. I hold a degree in Computer Science Engineering and have
          a strong interest in cybersecurity and modern web technologies.
          <br />
          <br />
          My experience spans across frontend development, software engineering,
          and security practices, built through roles and internships with{" "}
          <span className="text-purple-400 font-semibold">
            All India IT Association
          </span>
          ,{" "}
          <span className="text-purple-400 font-semibold">
            MP Police Cyber Cell
          </span>
          ,{" "}
          <span className="text-purple-400 font-semibold">
            Persistent Systems
          </span>
          , and{" "}
          <span className="text-purple-400 font-semibold">Oasis Infobyte</span>
          . These experiences helped me refine my technical acumen and
          analytical thinking.
          <br />
          <br />I have also completed professional certifications such as the{" "}
          <span className="text-purple-400 font-semibold">
            IBM Cybersecurity Professional Certificate
          </span>{" "}
          and{" "}
          <span className="text-purple-400 font-semibold">
            Meta Frontend Development Program
          </span>
          , further strengthening my capabilities in secure and efficient
          frontend development.
          <br />
          <br />I continuously explore new tools, methodologies, and frameworks
          to deliver clean, maintainable, and impactful software solutions.
        </p>

        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400 text-center">
            Interests Beyond Development
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-[var(--text-color)]">
            <li className="flex items-start">
              <ImPointRight className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              Gaming and Strategy-based Games 🎮
            </li>
            <li className="flex items-start">
              <ImPointRight className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              Exploring Music and Audio Technologies 🎵
            </li>
            <li className="flex items-start">
              <ImPointRight className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              Hiking and Nature Exploration ⛰️
            </li>
          </ul>
        </div>

        <p className="mt-8 md:mt-10 text-center italic text-purple-400 text-base md:text-lg">
          &quot;Strive to build things that make a difference ✨&quot;
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
