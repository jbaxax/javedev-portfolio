import { Button } from "@/components/ui/button";
import SocialNetworks from "@/components/social-networks";
import { Download } from "lucide-react";
import Image from "next/image";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="w-full px-10 md:min-w-[950px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-14">
        <div className="flex w-full md:w-1/2">
          <div className="space-y-4 md:px-25">
            <p className="text-2xl">Hola, soy</p>
            <h1 className="text-7xl font-bold">Walter Jave</h1>
            <p className="text-2xl">
              Y soy un <span className="font-bold">Frontend Developer</span>
            </p>
            <p className="text-xl">
              Estudiante del 10mo ciclo de la carrera de Ingeniería de Sistemas
              e Informática de la Universidad Tecnológica del Perú.
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:items-center ">
              <Button className=" hover:bg-white hover:text-black hover:border-black hover:shadow-lg cursor-pointer  transition-colors duration-400">
                Descargar CV <Download />
              </Button>
              <SocialNetworks />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className="rounded-full  max-w-94 max-h-94 overflow-hidden ">
            <Image
              src="/me.jpeg"
              alt="me"
              width={400}
              height={400}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <Stats/>
    </main>
  );
}
