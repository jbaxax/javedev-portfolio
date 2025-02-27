import { Linkedin, Youtube, Phone, Github } from "lucide-react";

const sizes =   {
    icon: 24,
    stroke: 1,
  }  


export const itemsSocialNetworks = [
  {
    id: 1,
    title: "Linkedin",
    icon: <Linkedin size={sizes.icon} strokeWidth={sizes.stroke}/>,
    link: "https://www.linkedin.com/in/walter-jave/",
    hoverBg: "hover:text-blue-600 transition-colors duration-300 hover:border-blue-600"
  },
  {
    id: 2,
    title: "Youtube",
    icon: <Youtube size={sizes.icon} strokeWidth={sizes.stroke} />,
    link: "https://www.youtube.com/@javedev",
    hoverBg: "hover:text-red-500 transition-colors duration-300 hover:border-red-500"
  },
  {
    id: 3,
    title: "WhatsApp",
    icon: <Phone size={sizes.icon} strokeWidth={sizes.stroke} />,
    link: "/services",
    hoverBg: "hover:text-green-500 transition-colors duration-300 hover:border-green-500"
  },
  {
    id: 4,
    title: "GitHub",
    icon: <Github size={sizes.icon} strokeWidth={sizes.stroke} />,
    link: "/services",
    hoverBg: "hover:text-gray-500 transition-colors duration-300 hover:border-gray-500"

  },
];
