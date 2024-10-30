import { StickyScrollRevealDemo } from "../components/StickyScroll"

const Projects = () => {
  return (
    <div className="relative">
      <div className="text-3xl sm:text-2xl absolute top-[-150px] md:-top-[110px] left-1/2 translate-x-[-50%] md:text-4xl sm:ml-16 font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b mt-12 mb-[-100px]  from-neutral-200 to-neutral-500 py-4 sm:py-8 text-center sm:text-left"
      >Projects Showcase</div>
      <StickyScrollRevealDemo/>
    </div>
  )
}

export default Projects