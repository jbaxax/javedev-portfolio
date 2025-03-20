import SliderServices from "./components/slider-services";

export default function Skills() {
  return (
    <div className="flex flex-col h-screen gap-6 lg:flex-row items-center justify-center  px-10 lg:px-40 lg:min-w-[930px] mt-24 md:mt-0">
      <div className="max-w-[650px]">
        <h1 className="text-4xl md:text-7xl ">Mis Habilidades</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Soy desarrollador web Full Stack especializado en la creación de
          sitios y aplicaciones atractivas, funcionales y optimizadas. Trabajo
          con tecnologías como Next.js, TypeScript, Tailwind CSS, PHP y MySQL,
          utilizando ShadCN para componentes UI, Axios para el consumo de APIs y
          Insomnia para pruebas de endpoints. Diseñando interfaces intuitivas y
          garantizando un backend eficiente, desarrollo soluciones completas que
          mejoran la experiencia del usuario.
        </p>
      </div>
      <div className="max-w-[300px] md:max-w-[550px]">
        <SliderServices />
      </div>
    </div>
  );
}
