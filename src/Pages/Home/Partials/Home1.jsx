import { motion } from 'framer-motion';
import Type from '@/components/Type';
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
function Home1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="relative w-full py-10 flex items-center justify-center overflow-hidden transition-colors duration-500 "
      id="home"
    >
      {/* Dynamic Background Glows - adjusted opacity for light mode */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-blue-400/10 dark:bg-blue-500/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-purple-400/10 dark:bg-purple-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl px-6  text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center space-y-10"
        >
          {/* 1. Glassmorphism Status Badge */}
          <motion.div
            variants={itemVariants}
            className="px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-gray-300 shadow-sm"
          >
            <span className="text-purple-500 dark:text-purple-400 animate-pulse">✦</span>
            Available for new opportunities
          </motion.div>

          {/* 2. Hero Headings */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#818cf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                Saurav Sharma
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-slate-500 dark:text-gray-400">
              <Type />
            </motion.div>
          </div>

          {/* 3. Description Text */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
          >
            Crafting beautiful, responsive web experiences with modern technologies. Passionate
            about clean code, user experience, and continuous learning.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div variants={itemVariants} className="flex gap-3 sm:gap-5 mt-6">
            {/* Primary Button */}
            <NavLink to="/projects">
              <button className="group relative  px-4 sm:px-8 py-4 rounded-2xl bg-slate-900 dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 text-white font-bold sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl dark:shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </NavLink>

            {/* Secondary Glass Button */}

            <Link smooth to="#contact-section">
              <button className="px-4 sm:px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white font-semibold sm:text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home1;
