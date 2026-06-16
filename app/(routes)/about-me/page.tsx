import Image from "next/image";

import ModalCertificates from "./components/modal-certificates";

export default function page() {
  return (
    <div className="flex max-w-full h-screen flex-col items-center lg:flex-row px-10 lg:px-40 gap-6 lg:min-w-[950px]">
      <div className="w-full lg:w-[75%] flex flex-col space-y-4 mt-20">
        <h1 className="text-4xl md:text-7xl font-bolds">Sobre mí</h1>
        <p className="text-xl md:text-2xl">
          Desarrollador Frontend con más de 10 meses de experiencia
          profesional construyendo aplicaciones web en producción con Next.js
          (App Router), React y TypeScript. He implementado lógica de UI
          compleja como sistemas de roles y permisos anidados, formularios
          dinámicos con más de 10 campos condicionales y ecommerce con ISR
          generando +530 rutas estáticas. Integro APIs REST con TanStack Query
          y Axios, aplicando arquitectura limpia y validación robusta con Zod y
          React Hook Form. Egresado de Ingeniería de Sistemas e Informática en
          la Universidad Tecnológica del Perú, perteneciente al décimo superior
          y al programa para alumnos destacados Generación Top 2024. Entrego
          funcionalidades completas de punta a punta de forma autónoma, con
          facilidad para el trabajo en equipo y orientación al logro.
        </p>
        <div className="flex justify-center lg:justify-start gap-6 w-full ">

          <ModalCertificates />
        </div>
      </div>
      <div className=" flex justify-center w-full h-full  items-center lg:w-[25%] ">
        <div className="relative rounded-md max-w-[350px] w-full h-[500px] ">
          <Image
            src="/me.jpeg"
            alt="me"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}