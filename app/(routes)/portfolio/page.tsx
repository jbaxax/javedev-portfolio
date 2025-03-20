import PortfolioBox from "./components/portfolio-box";

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center md:h-screen w-full mt-24 md:mt-0 ">
      <div>
        <h1 className="4xl lg:text-7xl mb-4">Proyectos</h1>
      </div>
      <PortfolioBox/>
    </div>
  )
}
