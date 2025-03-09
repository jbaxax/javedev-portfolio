"use client";
import Link from "next/link";
import data from "./data";

export default function NavLinks() {
  const {routes,pathname} = data()
  
  return routes.map((item) => {
    return(<div key={item.id}>
      <Link
        href={item.link}
        className={`${
          pathname === item.link
            ? "bg-primary text-white lg:dark:text-white  dark:text-black lg:bg-transparent lg:text-primary lg:underline lg:decoration-4 lg:underline-offset-4 lg:scale-105 "
            : "hover:scale-105 "
        } flex items-center p-2 rounded-sm gap-2 text-2xl transition-all duration-100 ease-in-out`}
      >
        <span className="lg:hidden">{item.icon}</span>
        {item.title}
      </Link>
    </div>)
  });
}
