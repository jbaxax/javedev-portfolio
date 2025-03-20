
import { ToggleTheme } from "../toggle-theme";
import NavLinks from "./nav-links";
import NavToggle from "./nav-toggle";

export default function Navbar() {
  return (
    <header className="fixed bg-white dark:bg-black top-0 z-50 flex justify-between px-5 lg:px-10 py-4 w-full lg:min-w-[950px]">
      <div className="hidden lg:block ">
        <h1 className="text-4xl font-bold ">
          Jave<span className="text-orange-400">Dev</span>
        </h1>
      </div>
      <div className="lg:flex hidden lg:gap-6">
        <nav className="flex flex-row">
          <ul className="flex  flex-row">
            <NavLinks />
          </ul>
        </nav>
        <div className="ml-1 mt-1.5">
          <ToggleTheme />
        </div>
      </div>

      <div className="flex justify-between  w-full items-center lg:hidden">
        <NavToggle />
        <ToggleTheme />
      </div>
    </header>
  );
}
