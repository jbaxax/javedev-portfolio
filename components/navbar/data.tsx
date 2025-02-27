import { BookText, CodeSquare, House, Speech, UserRound } from "lucide-react";

const size = 24

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <House size={size}   />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={size}   />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={size}   />,
        link: "/services",
    },
    {
        id: 4,
        title: "Porfafolio",
        icon: <CodeSquare size={size}   />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Testimonios",
        icon: <Speech size={size}   />,
        link: "/testimonials",
    },
];
