import { ReactNode } from 'react';
import Navbar from './Navbar';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import FunFact from './Fact';

interface BlueBackgroundWrapperProps {
    children: ReactNode;
}

export default function BlueBackgroundWrapper({ children }: BlueBackgroundWrapperProps) {


  


    return (

        <div className="relative h-[calc(100vh-20px)] mt-[10px] w-[calc(100vw-20px)] ml-[10px] md:h-[calc(100vh-100px)] md:w-[calc(100vw-100px)] md:mt-[50px] md:ml-[50px] rounded-[20px] md:rounded-[50px] bg-[#202030]">
              <div className="h-full w-full  bg-[#202030] rounded-[20px] md:rounded-[50px] bg-grid-small-white/[0.3] relative flex items-center justify-center">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-[20px] md:rounded-[50px]"></div>
      
      {children}
    </div>
    <div className='clock text-white absolute z-[50] top-5 md:top-10 left-6 '>
        <span className='text-[#EFF1C5]'>Did you know? </span>
      <FunFact/>
      
    </div>
    <div className='absolute left-1/2 translate-x-[-50%] md:right-6 lg:right-6  h-[30px] z-[10] bottom-[80px]  md:top-10 flex md:hidden gap-2'>
        <a target='_blank' href={"https://www.linkedin.com/in/talha-ansarii/"}>
    <IconBrandLinkedin className=" text-white hover:scale-110 transition-all duration-100   "  stroke={1.3} size={28} />
        </a>
        <a target='_blank' href={"https://github.com/talha-ansarii"}>
    <IconBrandGithub className=" text-white hover:scale-110 transition-all duration-100 " stroke={1.3} size={28} />
        </a>
        <a target='_blank' href={"https://www.instagram.com/talhaansarii/"}>
    <IconBrandInstagram className=" text-white hover:scale-110 transition-all duration-100 " stroke={1.3} size={29} />
        </a>

    </div>
    <div className='absolute hidden md:flex md:right-6 lg:right-6  h-[30px] z-[10] bottom-[80px]  md:top-10  gap-2'>
        <a target='_blank' href={"https://www.linkedin.com/in/talha-ansarii/"}>
    <IconBrandLinkedin className=" text-white hover:scale-110 transition-all duration-100   "  stroke={1.3} size={28} />
        </a>
        <a target='_blank' href={"https://github.com/talha-ansarii"}>
    <IconBrandGithub className=" text-white hover:scale-110 transition-all duration-100 " stroke={1.3} size={28} />
        </a>
        <a target='_blank' href={"https://www.instagram.com/talhaansarii/"}>
    <IconBrandInstagram className=" text-white hover:scale-110 transition-all duration-100 " stroke={1.3} size={29} />
        </a>

    </div>

        <Navbar/>    
        </div>
    );
}
