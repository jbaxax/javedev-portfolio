import { BookText, CodeSquare, House, Speech, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const size = 24;

export default function useNavigationData() {
  const pathname = usePathname();
  

  const routes = useMemo(() => [
    {
        id: 1,
        title: "Home",
        icon: <House size={size} />,
        active:  pathname != '/about-me' && pathname != '/services' && pathname != '/portfolio' && pathname != '/testimonials',
        link: "/",
      },
      {
        id: 2,
        title: "Sobre mí",
        active: pathname=== "/about-me",
        icon: <UserRound size={size} />,
        link: "/about-me",
      },
      {
        id: 3,
        title: "Servicios",
        active: pathname=== "/services",
        icon: <BookText size={size} />,
        link: "/services",
      },
      {
        id: 4,
        title: "Porfafolio",
        active: pathname=== "/portfolio",
        icon: <CodeSquare size={size} />,
        link: "/portfolio",
      },
      {
        id: 5,
        title: "Testimonios",
        active: pathname=== "/testimonials",
        icon: <Speech size={size} />,
        link: "/testimonials",
      },
  ],[pathname])


  

  return {
    routes, pathname
  }
}
