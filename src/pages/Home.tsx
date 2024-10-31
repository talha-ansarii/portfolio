import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="text-white orbitron-font text-2xl sm:text-3xl p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center sm:text-left"
      >
        Hii, I am
      </motion.div>
      <motion.p
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
        className="text-3xl md:text-6xl sm:ml-16 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 sm:py-8 text-center sm:text-left"
      >
        Talha Ansari
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
        className="text-[#EFF1C5] titillium-web md:ml-[180px] ml-0 font-[300] text-center sm:text-left text-[20px] sm:text-[24px]"
      >
        WEB DEVELOPER
      </motion.div>
    </div>
  );
};

export default Home;
