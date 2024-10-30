import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { PinContainer } from "./ui/3d-pin";
 


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
          <p className="font-bold text-xl">In the mountains</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },

  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (  
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1721332149112-c54e68990d99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
          <p className="font-bold text-xl">In the mountains</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1726996155615-e986ed87c9d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
          <p className="font-bold text-xl">In the mountains</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <div className="h-[350px] w-full flex items-center justify-center ">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="h-full w-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1727102406027-e7ae00b762b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
          <p className="font-bold text-xl">In the mountains</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>

        </PinContainer>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className=" p-5 md:p-10">
      <StickyScroll content={content} />
    </div>
  );
}
