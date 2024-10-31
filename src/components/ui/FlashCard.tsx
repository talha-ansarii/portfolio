"use client";
import  { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0   grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute  top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full  overflow-hidden  max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col  bg-neutral-900 sm:rounded-3xl "
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 lg:h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div>
                <div className="flex mt-2 justify-between items-start mb-[-10px] px-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-md text-neutral-200"
                    >
                      {active.title} 
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-sm"
                    >
                      {active.description} 
                    </motion.p>
                  </div>

                 
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="  text-xs md:text-sm lg:text-base  md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" mx-auto  h-full md:h-full w-full md:block flex flex-wrap justify-center items-center grid-cols-2 md:w-[50%] gap-2 md:gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4  flex flex-col mt-2 h-[200px]  md:w-auto  w-[150px] bg-gray-500 transition-all duration-300 md:flex-row group justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-24 w-40  rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className=" md:text-md text-xs font-bold group-hover:text-neutral-800 text-neutral-100 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-700 text-xs md:text-sm dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
           
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Oct 2024 - Present",
    title: "Distance Connect",
    src: "/distance.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {return (
       <div className="text-sm font-bold titillium-web">
        Big things coming up!!
</div>
      );
    },
  },
  
  {
    description: "Feb 2024 - Present",
    title: "DTU Times",
    src: "/dtu.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="text-sm titillium-web">
          <div>
            A <b>Front-End Developer</b> who is responsible for:
          </div>
          <ul className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div>
          ●

              </div>
            <li>Crafting responsive and engaging user interfaces using <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong></li>
            </div>
            <div className="flex gap-2">
              <div>
          ●

              </div>
              <li>Utilizing CSS frameworks like <strong>Bootstrap</strong> and <strong>TailwindCSS</strong> for efficient, consistent styling</li>
            </div>
            <div className="flex gap-2">
              <div>
          ●

              </div>
              <li>Developing web pages with <strong>React</strong> and <strong>Next.js</strong> for optimal performance and functionality</li>
            </div>
            <div className="flex gap-2">
              <div>
          ●

              </div>
              <li>Ensuring designs are mobile-optimized to provide seamless user experiences across devices</li>

            </div>



          

           

          </ul>
        </div>
      );
    },
    
  },
  {
    description: "Feb 2024 - July 2024",
    title: "Mathsloyal",
    src: "/mathsloyal.webp",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="text-sm titillium-web">
        
        <ul className="flex flex-col ">
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

          <li>Payment Gateway Integration: Successfully integrated and implemented Razorpay payment gateway, ensuring secure and
          efficient online transactions</li>

          </div>
          <div className="flex gap-2">
          <div>
          ●
          </div>
<div>
API Integration: Integrated ChatGPT-4 API to deliver instant math solutions, boosting user engagement by 40% and
enhancing educational support for over 5,000 active users monthly
</div>

          </div>
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

<div> Tech Stack: Architected a scalable web application using Tailwind CSS for responsive design, Next.js 13 for optimal
serverside rendering, and MongoDB for database management</div>

          </div>
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

<div>Conducted regular maintenance and updates to ensure system efficiency and security.</div>

          </div>
          
          


        </ul>
      </div>
      );
    },
  },
  

  
  
  {
    description: "Self Employed",
    title: "Freelance",
    src: "/free.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="text-sm titillium-web">
        
        <ul className="flex flex-col gap-2">
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

          <li>Collaborated with clients to deliver custom websites aligned with their goals</li>

          </div>
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

          <li>Designed, developed, and deployed responsive and user-friendly web solutions</li>

          </div>
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

          <li>Ensured timely project delivery and maintained effective client communication</li>


          </div>
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

          <li>Used tools like React, Next.js, and TailwindCSS for efficient, high-quality builds</li>


          </div>
          <div className="flex gap-2 ">
          <div>
          ●
          </div>

          <li>Optimized websites for speed, SEO, and accessibility</li>

          </div>
          


        </ul>
      </div>
      );
    },
  },
];
