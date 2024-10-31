import { motion } from "framer-motion";
import { ExpandableCardDemo } from "../components/ui/FlashCard";

const Journey = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl   z-[10]   top-[-50px] mt-[-50px]  left-1/2 translate-x-[-50%] md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 sm:py-8 text-center"
      >
        My Experience
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className=" w-full px-4 sm:px-8 md:px-16"
      >
        <ExpandableCardDemo />
      </motion.div>
    </div>
  );
};

export default Journey;
