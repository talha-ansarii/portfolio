import { motion } from "framer-motion"; // Import motion from framer-motion
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll";

const Skills = () => {
  const images = [
    "https://skillicons.dev/icons?i=html",
    "https://skillicons.dev/icons?i=css",
    "https://skillicons.dev/icons?i=js",
    "https://skillicons.dev/icons?i=nodejs",
    "https://skillicons.dev/icons?i=ts",
    "https://skillicons.dev/icons?i=sass",
    "https://skillicons.dev/icons?i=cpp",
    "https://skillicons.dev/icons?i=c",
    "https://skillicons.dev/icons?i=py",
    "https://skillicons.dev/icons?i=tailwind",
    "https://skillicons.dev/icons?i=bootstrap",
    "https://skillicons.dev/icons?i=react",
    "https://skillicons.dev/icons?i=threejs",
    "https://skillicons.dev/icons?i=redux",
    "https://skillicons.dev/icons?i=express",
    "https://skillicons.dev/icons?i=nextjs",
    "https://skillicons.dev/icons?i=fastapi",
    "https://skillicons.dev/icons?i=mongodb",
    "https://skillicons.dev/icons?i=mysql",
    "https://skillicons.dev/icons?i=postgres",
    "https://skillicons.dev/icons?i=prisma",
    "https://skillicons.dev/icons?i=aws",
    "https://skillicons.dev/icons?i=cloudflare",
    "https://skillicons.dev/icons?i=firebase",
    "https://skillicons.dev/icons?i=gcp",
    "https://skillicons.dev/icons?i=netlify",
    "https://skillicons.dev/icons?i=vercel",
    "https://skillicons.dev/icons?i=docker",
    "https://skillicons.dev/icons?i=git",
    "https://skillicons.dev/icons?i=github",
    "https://skillicons.dev/icons?i=md",
    "https://skillicons.dev/icons?i=npm",
    "https://skillicons.dev/icons?i=vite",
    "https://skillicons.dev/icons?i=wordpress",
  ];

  const names1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "TypeScript",
    "Sass",
    "C++",
    "C",
    "Python",
    "Tailwind CSS",
    "Bootstrap",
    "React",
  ];

  const names2 = [
    "Three.js",
    "Redux",
    "Express",
    "Next.js",
    "FastAPI",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "AWS",
    "Cloudflare",
    "Firebase",
  ];

  const names3 = [
    "GCP",
    "Netlify",
    "Vercel",
    "Docker",
    "Git",
    "GitHub",
    "Markdown",
    "npm",
    "Vite",
    "WordPress",
  ];

  return (
    <div className="relative">
      <motion.div
        className="text-3xl  sm:text-2xl z-[10] absolute top-[-5px] md:-top-[30px] left-1/2 translate-x-[-50%] md:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b mt-12 mb-[-100px]  from-neutral-200 to-neutral-500 py-4 sm:py-8 text-center sm:text-left"
        initial={{ opacity: 0, y: -20, x: "-50%" }} // Initial state
        animate={{ opacity: 1, y: 0, x: "-50%" }} // Animate to
        transition={{ duration: 0.5 }} // Transition properties
      >
        Skills
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }} // Initial state for the ParallaxScrollSecond
        animate={{ opacity: 1 }} // Animate to
        transition={{ delay: 0.2, duration: 0.5 }} // Delay and duration for the transition
      >
        <ParallaxScrollSecond names1={names1} names2={names2} names3={names3} images={images} />
      </motion.div>
    </div>
  );
};

export default Skills;
