"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
  names1,
  names2,
  names3,
}: {
  images: string[];
  className?: string;
  names1: string[];
  names2: string[];
  names3: string[];
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[calc(100vh-100px)] relative z-[20] no-scrollbar items-start overflow-y-auto w-[calc(100vw-100px)]", className)}
      ref={gridRef}
    >
    

        
      <div
        className=" grid-cols-3 hidden md:grid md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="object-cover object-left-top peer rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <div className="text-white text-center opacity-0 mt-1 font-semibold peer-hover:opacity-100 transition-all duration-300">{names1[idx]}</div>

            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2 " + idx}>
              <img
                src={el}
                className=" object-cover peer object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
                   <div className="text-white text-center opacity-0 mt-1 font-semibold peer-hover:opacity-100 transition-all duration-300">{names2[idx]}</div>

            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <img
                src={el}
                className=" object-cover peer object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
               <div className="text-white text-center opacity-0 mt-1 font-semibold peer-hover:opacity-100 transition-all duration-300">{names3[idx]}</div>


            </motion.div>
          ))}
        </div>
      </div>
      <div
        className=" grid-cols-3 grid md:hidden md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                // y: translateYFirst,
                // x: translateXFirst,
                rotateZ: rotateXFirst,
              }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="object-cover object-left-top peer rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <div className="text-white text-center opacity-0 mt-1 font-semibold peer-hover:opacity-100 transition-all duration-300">{names1[idx]}</div>

            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2 " + idx}>
              <img
                src={el}
                className=" object-cover peer object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
                   <div className="text-white text-center opacity-0 mt-1 font-semibold peer-hover:opacity-100 transition-all duration-300">{names2[idx]}</div>

            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                // y: translateYThird,
                // x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <img
                src={el}
                className=" object-cover peer object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
               <div className="text-white text-center opacity-0 mt-1 font-semibold peer-hover:opacity-100 transition-all duration-300">{names3[idx]}</div>


            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
