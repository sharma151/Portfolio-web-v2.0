// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import motion from framer-motion
import homeLogo from "@/assets/home-main.svg";
import Type from "@/Components/Type";

function Home1() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-screen " id="home">
      {/* <Particle /> */}
      <div className="w-full px-6 py-12 md:px-20">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 1 }} // Adjust duration as needed
        >
          <div className="md:w-7/12 w-full space-y-6 ">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[var(--text-color)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
            >
              Hi There!{" "}
              <span role="img" aria-labelledby="wave" className="inline-block">
                👋🏻
              </span>
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[var(--text-color)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }} // Delay for staggered effect
            >
              I&apos;M
              <span className="text-purple-400"> Saurav Sharma</span>
            </motion.h1>

            <Type />
          </div>

          <div className="md:w-5/12 w-full mt-10 md:mt-0">
            <motion.img
              src={homeLogo}
              alt="home"
              className="w-full max-h-[450px] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }} // Delay for staggered effect
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home1;
