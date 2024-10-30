
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { motion } from "framer-motion";

export function AnimatedModalDemo({content}: any) {
  const images = content?.images;

  return (
    <div className="pt-2 flex items-center justify-start">
      <Modal>
        <ModalTrigger className="  m-auto text-sm font-semibold text-[#EFF1C5] dark:bg-white dark:text-black  flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            View Details
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🥳
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="bg-neutral-900">
            <h4 className="text-lg md:text-2xl  relative z-[100] text-neutral-100 font-bold text-center mb-8">
              <div>{content&& content?.title}</div>
            </h4>
            <div className="flex justify-center items-center">
              {images && images?.map((img: string, idx : number) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border  flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={img}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              {content && content.text}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
           {content && content?.link && content?.linkText &&
            <a target="_blank" href={content.link} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              {content && content?.linkText}
            </a>}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}


