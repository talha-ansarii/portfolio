import { FloatingDock } from "./ui/floating-dock";
import {
  IconBulb,
  IconDeviceGamepad,
  IconDeviceLaptop,
  IconDeviceMobileMessage,
  IconHome,
  IconRoute,
  IconUserCircle,
} from "@tabler/icons-react";
 
const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "About Me",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "My Experience",
      icon: (
        <IconRoute className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: "Skills",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/skills",
    },
    {
      title: "Projects",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Fun",
      icon: (
        <IconDeviceGamepad className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/game",
    },
 
    {
      title: "Contact",
      icon: (
        <IconDeviceMobileMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    }
  ];

  return (
    <div>
      <div className="flex relative z-[50] mt-[-70px] md:mt-[-35px] justify-center items-end ">
      <FloatingDock
        items={links}
      />
    </div>
    </div>
  )
}

export default Navbar