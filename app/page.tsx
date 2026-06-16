import { Button } from "@/components/ui/button";
import SocialNetworks from "@/components/social-networks";
import { Download } from "lucide-react";

import Link from "next/link";

import ExperiencieCard from "@/components/experiencie-card";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-6 lg:px-10 mt-14">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8">
        {/* Left Column - Hero Content */}
        <div className="flex flex-col justify-start">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl">Hola, soy</p>
              <h1 className="text-4xl lg:text-6xl font-bold">Walter Jave</h1>
              <p className="text-xl lg:text-2xl">
                Y soy un{" "}
                <span className="font-bold">Desarrollador Frontend</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center lg:justify-start">
              <Button className="hover:bg-white hover:text-black hover:border-black hover:shadow-lg cursor-pointer transition-colors duration-400 w-40 lg:w-50">
                <Link
                  target="_blank"
                  href="https://utpedupe-my.sharepoint.com/:w:/g/personal/u19206658_utp_edu_pe/ERqsAUFP831DtjbmYqVqADwBy8AZ_zZnj_lOtXc9e7_ELQ?e=2tsYq9"
                  className="flex justify-center items-center gap-2"
                >
                  Descargar CV <Download />
                </Link>
              </Button>

              <SocialNetworks />
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8 space-y-4 text-sm lg:text-base leading-relaxed">
            <p>
              <strong>Desarrollador Frontend</strong> con más de 10 meses de
              experiencia construyendo aplicaciones web en producción con
              Next.js (App Router), React y TypeScript.
            </p>
            <p>
              He implementado lógica de UI compleja como{" "}
              <strong>sistemas de roles y permisos anidados</strong>,
              formularios dinámicos con +10 campos condicionales y ecommerce con
              ISR generando <strong>+530 rutas estáticas</strong>.
            </p>
            <p>
              Integro APIs REST con <strong>TanStack Query y Axios</strong>, y
              aplico validación robusta con <strong>Zod y React Hook Form</strong>{" "}
              junto a interfaces modernas con <strong>shadcn/ui</strong> y
              TailwindCSS.
            </p>
            <p>
              Egresado de Ingeniería de Sistemas e Informática de la Universidad
              Tecnológica del Perú, miembro del programa{" "}
              <strong>Generación Top 2024</strong> (décimo superior).
            </p>
            <p>
              Me caracterizo por mi{" "}
              <strong>compromiso con el aprendizaje continuo</strong> y la
              entrega de funcionalidades completas de punta a punta de forma
              autónoma.
            </p>
          </div>
        </div>

        {/* Right Column - Experience */}
        <div className="flex flex-col mt-2">
          
          <ExperiencieCard />
        </div>
      </div>
    </main>
  );
}