import { StickyScrollRevealDemo } from "../components/StickyScroll";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="relative w-full">
      <motion.div
        className="text-3xl md:text-6xl  sm:text-2xl absolute top-[-150px] left-1/2 md:-top-[110px]  font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b mt-12 mb-[-100px] from-neutral-200 to-neutral-500 py-4 sm:py-8 text-center sm:text-left"
        initial={{ opacity: 0, y: -30, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects Showcase
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.8 }}
      >
        <StickyScrollRevealDemo />
      </motion.div>
    </div>
  );
};

export default Projects;
