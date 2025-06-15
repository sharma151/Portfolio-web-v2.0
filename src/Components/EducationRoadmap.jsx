/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EducationRoadmap = () => {
  const educationData = [
    {
      year: "2024 - Present",
      title: "Young Innovation pvt ltd (NP)",
      degree: "Frontend Developer",
      link: "https://younginnovations.com.np/",
      description:
        " React Frontend Developer | Building clean, responsive UIs with modern tools like TypeScript, TanStack Query, and Tailwind CSS. Passionate about scalable components, smooth user experiences, and always learning. Open to new challenges and growth opportunities!",
      // institution: "Harvard University, Cambridge, MA, United States",
    },
    {
      year: "2020 - 2024",
      title: "Oriental college of Technology",
      degree: "B.Tech - Computer science Engineering",
      link: "https://oriental.ac.in/",
      description:
        "Completed B.Tech in Computer Science and Engineering with a specialization in Cyber Security. Gained a strong foundation in core engineering disciplines including Civil, Electrical, and Mechanical, along with in-depth knowledge in Software Engineering, Cryptography, Ethical Hacking, Mobile Forensics, IT and Web Technologies, Hardware Security, OOPs, Data Structures and Algorithms, DBMS, Python, Operating Systems, Network Security, Digital Forensics, and more.",
      institution: "Bhopal (MP), India",
    },
    {
      year: "2018 - 2020",
      title: "Dav sushil kedia vishwa Bharti",
      degree: "Senior Secondary Schooling",
      link: "https://davnepal.com/",
      description:
        "Completed senior secondary education (Class 11–12) under CBSE with a focus on the Science stream, specializing in Physics, Chemistry, Mathematics, Computer Science, English, and Physical Education. ",
      institution: "Kathmandu, Nepal",
    },
    {
      year: "2015 - 2018",
      title: " Gyan Bharti Public School",
      degree: "Higher Secondary School",
      link: "http://gbpsdbg.org/",
      description: " Darbhanga (BR), India ",
      // institution: "Princeton University, Princeton, NJ, United States",
    },
  ];

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-500 mb-4">
          Education & Experience
        </h1>
        {/* <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing
        </p> */}

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-[18px] md:left-[20%] top-0 bottom-0 w-0.5 bg-purple-500"
            style={{
              left: "calc(1.25rem + 3px)",
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-10 md:flex"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {/* Dot Indicator */}
                <div
                  className="absolute left-1 top-[9px] w-3 h-3 rounded-full bg-purple-500 border-2 border-white z-10"
                  style={{
                    left: "24px",
                    transform: "translateX(-50%)",
                  }}
                ></div>

                {/* Year (Mobile) */}
                <div className="md:hidden text-sm font-medium text-purple-500 mb-1">
                  {item.year}
                </div>

                {/* Year (Desktop) */}
                <div
                  className="hidden md:block w-1/5 pr-4 text-right"
                  style={{ width: "20%" }}
                >
                  <h2 className="text-lg font-bold text-purple-500 mt-1">
                    {item.year}
                  </h2>
                </div>

                {/* Card Content */}
                <div className="w-full md:pl-8" style={{ width: "80%" }}>
                  <div className="border-purple-600 border p-4 md:p-6 rounded-lg shadow-sm">
                    <Link to={item.link}>
                      <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-1 md:mb-2">
                        {item.title}
                      </h3>
                    </Link>
                    {item.degree && (
                      <div className="flex items-center mb-2">
                        <span className="text-[var(--text-color)] font-medium text-sm md:text-base">
                          {item.degree}
                        </span>
                      </div>
                    )}
                    <p className="text-[var(--text-color)] text-sm md:text-base mb-3 md:mb-4">
                      {item.description}
                    </p>
                    <p className="text-[var(--text-color)] font-medium text-xs md:text-sm">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationRoadmap;
