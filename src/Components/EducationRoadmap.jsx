// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const EducationRoadmap = () => {
  const educationHistory = [
    {
      level: "Bachelor's Degree",
      institution: "XXXXX University",
      duration: "2020 - 2024",
      description:
        "BSc in Computer Science and Information Technology, focusing on software development and systems design.",
    },
    {
      level: "Senior School (+2)",
      institution: "ABC +2 College",
      duration: "2018 - 2020",
      description:
        "Specialized in Science stream with focus on Physics, Math, and Computer Science.",
    },
    {
      level: "High School",
      institution: "XYZ High School",
      duration: "2012 - 2016",
      description:
        "Completed SEE with distinction, building foundational knowledge.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-16">
          🎓 Education Roadmap
        </h2>

        <div className="relative flex flex-col items-center sm:items-start sm:mx-auto sm:max-w-[90%] md:max-w-none">
          {/* Vertical line */}
          <div
            className="
              absolute hidden sm:block w-1 !bg-purple-500 h-full 
              left-[5%] md:left-[5%] lg:left-1/2 
              transform lg:-translate-x-1/2 z-0 rounded-full
            "
          />

          {educationHistory.map((item, index) => (
            <motion.div
              key={index}
              className={`
                w-full mb-20 flex flex-col sm:flex-row items-center relative z-10
                ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}
              `}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2 * index,
              }}
            >
              {/* Dot */}
              <div
                className="
                  hidden sm:block absolute 
                  w-6 h-6 !bg-purple-600 rounded-full border-4 border-white
                  left-[5%] md:left-[5%] lg:left-1/2 
                  transform lg:-translate-x-1/2 
                  z-20
                "
                style={{ top: "50%" }}
              />

              {/* Card */}
              <div
                className={`
                  max-w-md sm:max-w-sm transition-all duration-300
                  hover:shadow-[0_0_15px_3px_rgba(168,85,247,0.5)]
                  rounded-xl border border-purple-500 dark:bg-gray-800 p-4
                  sm:ml-20
                  ${index % 2 === 0 ? "lg:ml-0 lg:mr-10" : "lg:ml-10 lg:mr-0"}
                `}
              >
                <h3 className="text-xl font-semibold text-purple-700">
                  {item.level}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                  {item.institution} • {item.duration}
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationRoadmap;
