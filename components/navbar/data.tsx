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
      active: pathname != '/about-me' && pathname != '/services' && pathname != '/portfolio',
      link: "/",
    },
    {
      id: 2,
      title: "About Me",
      active: pathname === "/about-me",
      icon: <UserRound size={size} />,
      link: "/about-me",
    },
    {
      id: 3,
      title: "Skills",
      active: pathname === "/skills",
      icon: <BookText size={size} />,
      link: "/skills",
    },
    {
      id: 4,
      title: "Portfolio",
      active: pathname === "/portfolio",
      icon: <CodeSquare size={size} />,
      link: "/portfolio",
    },

  ], [pathname])




  return {
    routes, pathname
  }
}
