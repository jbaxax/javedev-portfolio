import SliderServices from "./components/slider-services";

export default function Skills() {
  return (
    <div className="flex flex-col h-screen gap-6 lg:flex-row items-center justify-center  px-10 lg:px-40 lg:min-w-[930px] mt-24 md:mt-0">
      <div className="max-w-[650px]">
        <h1 className="text-4xl md:text-7xl ">Habilidades</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Soy Desarrollador Frontend especializado en construir aplicaciones
          web listas para producción con Next.js (App Router), React y
          TypeScript. Integro APIs REST con TanStack Query y Axios, y manejo
          lógica de formularios y validación compleja con Zod y React Hook
          Form. Construyo interfaces limpias y responsivas con Shadcn/ui y
          TailwindCSS, y también trabajo con Laravel y PHP cuando se necesita
          colaboración full-stack.
        </p>
        <p className="mt-4 text-xl md:text-2xl">
          Inglés: nivel básico A2 — estudiando activamente en ICPNA.
        </p>
      </div>
      <div className="max-w-[300px] md:max-w-[550px]">
        <SliderServices />
      </div>
    </div>
  );
}
