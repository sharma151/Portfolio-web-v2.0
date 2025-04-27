/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

function Techstack({ heading, icons }) {
  return (
    <div className="px-4 py-4 w-[90%] mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-white mb-10"
        initial={{ opacity: 0, y: 50 }} // Starting position (invisible and 50px below)
        whileInView={{ opacity: 1, y: 0 }} // Animation on scroll into view
        viewport={{ once: true }} // Trigger animation only once
        transition={{ duration: 0.8 }} // Duration of the animation
      >
        {heading.split(" ").map((word, idx) =>
          word.toLowerCase() === "skillset" || word.toLowerCase() === "tools" ? (
            <span key={idx} className="text-[#b562d6]">
              {word}{" "}
            </span>
          ) : (
            <span key={idx}>{word} </span>
          )
        )}
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0, scale: 0.8 }} // Starting scale and opacity
        whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal scale
        viewport={{ once: true }} // Trigger animation only once
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay after heading animation
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 bg-black border border-[#b562d6] rounded-lg shadow-md flex items-center justify-center text-white text-4xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#b562d6]"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            initial={{ opacity: 0, y: 30 }} // Initial position off-screen
            animate={{ opacity: 1, y: 0 }} // Animate to visible position
            transition={{
              delay: 0.1 * index, // Stagger animation for each icon
              duration: 0.5,
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Techstack;
