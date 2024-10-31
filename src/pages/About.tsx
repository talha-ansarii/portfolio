import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-center text-4xl md:text-6xl font-bold mb-6"
      >
        About Me
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-[#EFF1C5] text-xs leading-4 md:text-lg text-center px-12 md:px-[150px] mb-4 md:leading-6"
      >
        Hey there! I’m Talha Ansari, a web developer based in Delhi and a Computer Science student at Delhi Technological University. I’m passionate about bringing ideas to life on the web, whether it's creating a cozy blog for a local restaurant or building a user-friendly online store. I love the challenge of making websites that look great and feel easy to use.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="text-[#EFF1C5] text-center px-12"
      >
        I’m always excited to connect with others, so feel free to check out my projects or reach out on GitHub and LinkedIn!
      </motion.div>
    </div>
  );
};

export default About;
