import { motion } from "framer-motion";
import PuzzleGame from "./Test";


const Game = () => {
  return (
    <div>
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-md top-[-50px] mt-[-50px]  left-1/2 translate-x-[-50%] md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-100 py-4 sm:py-8 text-center"
      >
        "Piece It Together (Literally)!"


      </motion.div>

      <PuzzleGame/>
    </div>
  )
}

export default Game