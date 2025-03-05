"use client";
import Link from "next/link";
import { itemsNavbar } from "./data";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const router = usePathname();
  return itemsNavbar.map((item) => {
    return(<div key={item.id}>
      <Link
        href={item.link}
        className={`${
          router === item.link
            ? "bg-primary text-white lg:dark:text-white  dark:text-black lg:bg-transparent lg:text-primary lg:underline lg:decoration-4 lg:underline-offset-4 lg:scale-105 "
            : "hover:scale-105 "
        } flex items-center p-2 rounded-sm gap-2 text-2xl transition-all duration-100 ease-in-out`}
      >
        <span className="md:hidden">{item.icon}</span>
        {item.title}
      </Link>
    </div>)
  });
}
