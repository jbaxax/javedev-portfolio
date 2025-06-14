import { Button } from "@/components/ui/button";
import SocialNetworks from "@/components/social-networks";
import { Download } from "lucide-react";

import Link from "next/link";

import ExperiencieCard from "@/components/experiencie-card";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-6 lg:px-10 py-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8">
        {/* Left Column - Hero Content */}
        <div className="flex flex-col justify-start">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl">Hola, soy</p>
              <h1 className="text-4xl lg:text-6xl font-bold">Walter Jave</h1>
              <p className="text-xl lg:text-2xl">
                Y soy un{" "}
                <span className="font-bold">Desarrollador Full Stack</span>
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
              <strong>Estudiante del 10mo ciclo</strong> de Ingeniería de
              Sistemas e Informática de la Universidad Tecnológica del Perú.
            </p>
            <p>
              Cuento con conocimientos sólidos en{" "}
              <strong>TypeScript, PHP y Python</strong>, así como en el manejo
              de bases de datos como SQL Server, MySQL y PostgreSQL.
            </p>
            <p>
              Desarrollo interfaces modernas con <strong>shadcn/ui</strong> y
              utilizo frameworks como Angular, Next.js, Vite, Laravel y Django
              para proyectos integrales.
            </p>
            <p>
              Además, domino herramientas de control de versiones como{" "}
              <strong> Git </strong>y <strong>GitHub.</strong>
            </p>
            <p>
              Me caracterizo por mi{" "}
              <strong>compromiso con el aprendizaje continuo</strong> y mi
              enfoque en la entrega de resultados de calidad.
            </p>
          </div>
        </div>

        {/* Right Column - Experience */}
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
            Experiencia
          </h2>
          <ExperiencieCard />
        </div>
      </div>
    </main>
  );
}
