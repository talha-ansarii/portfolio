import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedModalDemo } from "./Modal";
import { StickyScrollMobile } from "./ui/sticky-scroll-reveal-mobile";
 


const content = [
  {
    title: "Repolens",
    description:
      "Repo Lens helps you quickly understand and navigate your codebase by allowing you to ask questions about your project. It leverages the power of AI to analyze your code and provide relevant answers, along with code references and summaries. This streamlines the development process, making it easier to find the information you need, especially in large or unfamiliar projects."
,
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/repolens"
          href="https://repolens.vercel.app"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"/repolens.png"}>
          <p className="font-bold text-xl">Repolens</p>
          <p className="font-normal text-sm">  </p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
  {
    title: "Tube Help",
    description:
      "Built with Next.js, using the Gemini API for AI-powered timestamps, smart summaries, quizzes, and an interactive chatbot."
,
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/tubeHelp"
          href="https://tube-help.vercel.app"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"/tubehelp.png"}>
          <p className="font-bold text-xl">Tube Help</p>
          <p className="font-normal text-sm">  </p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
  {
    title: "MOVIX",
    description:
      "An application to find ratings and reviews for the latest movies and TV shows. Users can also watch trailers and get recommendations based on their preferences.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/movix"
          href="https://movix-henna-five.vercel.app/"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"/movix1.png"}>
          <p className="font-bold text-xl">Movix</p>
          <p className="font-normal text-sm">  </p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },

  {
    title: "SEVEN BURGERS",
    description:
      "A serverless web application where users can read blogs and explore the restaurant’s infoformation.",
    content: (  
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/sevenburgerss"
          href="https://sevenburgerss.netlify.app/"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"/seven1.png"}>
          <p className="font-bold text-xl">Seven Burgers</p>
          <p className="font-normal text-sm"></p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
  {
    title: "E-commerce API",
    description:
      "Developed a RESTful API for an E-commerce application allowing management of products, categories, and user authentication",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/api-docs/"
          href="https://web-production-3594.up.railway.app/api-docs/"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"/ecom.png"}>
          <p className="font-bold text-xl">Api Docs</p>
          <p className="font-normal text-sm"></p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
  {
    title: "SUMZ",
    description:
      "Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and consise summaries.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/sumz"
          href="https://talha-sumz.netlify.app"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"/sumz.png"}>
          <p className="font-bold text-xl">SUMZ</p>
          <p className="font-normal text-sm"></p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
];
const contentMobile = [
  {
    title: "Repolens",
    description:
      "Repo Lens helps you quickly understand and navigate your codebase by allowing you to ask questions about your project. It leverages the power of AI to analyze your code and provide relevant answers, along with code references and summaries. This streamlines the development process, making it easier to find the information you need, especially in large or unfamiliar projects."
,
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
     
      </div>
    ),
    modal : <AnimatedModalDemo content={{text:"Repo Lens helps you quickly understand and navigate your codebase by allowing you to ask questions about your project. It leverages the power of AI to analyze your code and provide relevant answers, along with code references and summaries. This streamlines the development process, making it easier to find the information you need, especially in large or unfamiliar projects.",
      link : "https://repolens.vercel.app/",
      images : ["/repolens.png","/repolens2.png","/repolens3.png"],
      title : "Repolens" ,
      linkText : "/repolens"
    }}/>
  },
  {
    title: "Tube Help",
    description:
      "Built with Next.js, using the Gemini API for AI-powered timestamps, smart summaries, quizzes, and an interactive chatbot."
,
    content: (
      <div className="h-[350px] w-full flex items-center justify-center ">
        
      </div>

    ),
    modal : <AnimatedModalDemo content={{text:"Built with Next.js, using the Gemini API for AI-powered timestamps, smart summaries, quizzes, and an interactive chatbot.",
      link : "https://tube-help.vercel.app/",
      images : ["/tubehelp.png"],
      title : "Tube Help" ,
      linkText : "/tubeHelp"
    }}/>
  },
  {
    title: "MOVIX",
    description:
      "An application to find ratings and reviews for the latest movies and TV shows. Users can also watch trailers and get recommendations based on their preferences.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        
      </div>
    ),
    modal : <AnimatedModalDemo content={{text:"An application to find ratings and reviews for the latest movies and TV shows. Users can also watch trailers and get recommendations based on their preferences.",
      link : "https://movix-henna-five.vercel.app/",
      images : ["/movix1.png","/movix2.png","/movix3.png","/movix4.png","/movix5.png"],
      title : "Movix" ,
      linkText : "/movix"
    }}/>
  },

  {
    title: "SEVEN BURGERS",
    description:
      "A serverless web application where users can read blogs and explore the restaurant’s infoformation.",
    content: (  
        <div className="h-[350px] w-full flex items-center justify-center ">
        
      </div>
    ),
    modal : <AnimatedModalDemo content={{text:"A serverless web application where users can read blogs and explore the restaurant’s infoformation.",
      link : "https://sevenburgerss.netlify.app/",
      images : ["seven1.png","seven2.png","seven3.png","seven4.png","seven5.png"],
      title : "Seven Burgers" ,
      linkText : "/sb"
    }}/>
  },
  {
    title: "E-commerce API",
    description:
      "Developed a RESTful API for an E-commerce application allowing management of products, categories, and user authentication",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        
      </div>
    ),
    modal : <AnimatedModalDemo content={{text:"Developed a RESTful API for an E-commerce application allowing management of products, categories, and user authentication.",
      link : "https://web-production-3594.up.railway.app/api-docs/",
      images : ["ecom.png","ecom2.png","ecom3.png","ecom4.png","ecom5.png"],
      title : "E-commerce API" ,
      linkText : "/api"
    }}/>
  },
  {
    title: "SUMZ",
    description:
      "Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and consise summaries.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
      
      </div>
    ),
    modal : <AnimatedModalDemo content={{text:"Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and consise summaries.",
      link : "https://talha-sumz.netlify.app",
      images : ["sumz.png","sumz2.png","sumz3.png","sumz4.png","sumz5.png"],
      title : "SUMZ" ,
      linkText : "/sumz"
    }} />
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
<StickyScrollMobile content={contentMobile}/>      
    <div className="bg-red p-5 md:p-10">
      <StickyScroll content={content} />
    </div>

    </div>
  );
}
