import NavLinks from "./nav-links";
import NavToggle from "./nav-toggle";

export default function Navbar() {
  return (
    <header className="flex justify-between px-10 py-4">
      <div className="hidden md:block ">
        <h1 className="text-4xl font-bold ">
          Jave<span className="text-orange-400">Dev </span>
        </h1>
      </div>
      <div className="hidden md:block">
        <nav>
          <ul>
            <NavLinks />
          </ul>
        </nav>
      </div>

      <div className="md:hidden">
        <NavToggle />
      </div>
    </header>
  );
}
