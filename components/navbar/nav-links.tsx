"use client";
import Link from "next/link";
import { itemsNavbar } from "./data";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const router = usePathname();
  return (
    <div className="flex flex-col md:flex-row px-4 space-y-4 justify-center">
      {itemsNavbar.map((item) => (
        <div key={item.id}>
          <Link
            href={item.link}
            className={`${router === item.link && "bg-primary text-white md:bg-transparent md:text-primary md:underline md:decoration-4 md:underline-offset-4"} flex items-center p-2 rounded-sm gap-2 text-2xl`}
          >
            <span className="md:hidden">{item.icon}</span>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
