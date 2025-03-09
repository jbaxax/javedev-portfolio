import SliderServices from "./components/slider-services";

export default function services() {
  return (
    <div className="flex flex-col h-screen gap-6 lg:flex-row items-center justify-center  px-10 lg:px-40 lg:min-w-[930px]">
      <div className="max-w-[650px]">
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
