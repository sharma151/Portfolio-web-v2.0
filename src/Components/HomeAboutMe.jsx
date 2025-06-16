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
            I&apos;m a frontend developer with a strong interest in building
            responsive, scalable, and accessible web interfaces.
            <br />
            <br />
            My current focus is on modern web technologies like{" "}
            <span className="text-purple-400 font-semibold">
              React.js
            </span> and{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>, and
            I actively work with tools such as{" "}
            <span className="text-purple-400 font-semibold">
              TypeScript, Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="text-purple-400 font-semibold">
              TanStack Query
            </span>{" "}
            to create efficient and maintainable UI solutions.
            <br />
            <br />
            I’m continually expanding my knowledge in frontend development and
            enjoy exploring best practices in performance, accessibility, and
            component architecture.
            <br />
            <br />
            I&apos;m also looking forward to deepening my understanding of{" "}
            <span className="text-purple-400 font-semibold">
              backend technologies and DevOps
            </span>{" "}
            to become a more well-rounded engineer.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Tilt>
            <img src={myImg} alt="avatar" />
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAboutMe;
