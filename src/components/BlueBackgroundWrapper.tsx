// components/BlueBackgroundWrapper.js
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

interface BlueBackgroundWrapperProps {
    children: ReactNode;
}

export default function BlueBackgroundWrapper({ children }: BlueBackgroundWrapperProps) {
    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds()
      })
    useEffect(() : any => {
        const intervalId = setInterval(() => {
          const date = new Date();
          setTime({
            minutes: date.getMinutes(),
            hours: date.getHours(),
            seconds: date.getSeconds()
          })
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

    const convertToTwoDigit = (number : any) => {
        return number.toLocaleString('en-US', {
          minimumIntegerDigits: 2
        })
      }


    return (

        <div className="relative h-[calc(100vh-50px)] mt-[25px] w-[calc(100vw-50px)] ml-[25px] md:h-[calc(100vh-100px)] md:w-[calc(100vw-100px)] md:mt-[50px] md:ml-[50px] rounded-[50px] bg-[#202030]">
              <div className="h-full w-full  bg-[#202030] rounded-[50px] bg-grid-small-white/[0.3] relative flex items-center justify-center">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-[50px]"></div>
      
      {children}
    </div>
    <div className='clock text-white absolute z-[50] top-10 left-6 '>
        <span className='text-[#EFF1C5]'>Local Time : </span>
      <span>{convertToTwoDigit(time.hours)}:</span>
      <span>{convertToTwoDigit(time.minutes)}:</span>
      <span>{convertToTwoDigit(time.seconds)}</span>
      
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
