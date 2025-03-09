import SliderServices from "./components/slider-services";

export default function services() {
  return (
    <div className="flex flex-col gap-6 md:flex-row items-center justify-center md:mt-10 px-10 lg:px-40 md:min-w-[930px] ">
      <div className="max-w-[450px]">
        <h1 className="text-4xl md:text-7xl ">Mis Servicios</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Ofrezco servicios de desarrollo web frontend especializados
          en la creación de sitios web y aplicaciones atractivas y funcionales.
          Utilizando tecnologicas como next, typescript y tailwind. Diseño interfaces de usuario intuitivas 
          y responsivas que reflejan la identidad de la marca de mis clientes y mejoran su presenciaen línea. 
        </p>
      </div>
      <div className="max-w-[300px] md:max-w-[550px]">
        <SliderServices />
      </div>
    </div>
  )
}
