import Image from "next/image";

import ModalCertificates from "./components/modal-certificates";

export default function page() {
  return (
    <div className="flex max-w-full h-screen flex-col items-center lg:flex-row px-10 lg:px-40 gap-6 lg:min-w-[950px]">
      <div className="w-full flex flex-col space-y-4 mt-20">
        <h1 className="text-4xl md:text-7xl font-bolds">Sobre mí</h1>
        <p className="text-xl md:text-2xl">
          Desarrollador Frontend con experiencia profesional construyendo
          aplicaciones web en producción con Next.js, React y TypeScript.
          Implementé lógica de UI compleja como sistemas de roles y permisos
          anidados, formularios dinámicos con más de 10 campos condicionales
          y un ecommerce con ISR generando +530 rutas estáticas. Integro APIs
          REST con TanStack Query y Axios, aplicando arquitectura limpia y
          validación robusta con Zod y React Hook Form. Egresado de Ingeniería
          de Sistemas e Informática de la Universidad Tecnológica del Perú,
          décimo superior de mi promoción y miembro del programa Generación
          Top 2024. Entrego funcionalidades completas de punta a punta de
          forma autónoma, con fuerte trabajo en equipo y foco en resultados.
        </p>
        <div className="flex justify-center lg:justify-start gap-6 w-full ">
          <ModalCertificates />
        </div>
      </div>
    </div>
  );
}
