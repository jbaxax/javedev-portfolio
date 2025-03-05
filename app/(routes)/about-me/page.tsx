import Image from "next/image";
import ModalContact from "./components/modal-contact";
import ModalCertificates from "./components/modal-certificates";

export default function page() {
  return (
    <div className="flex max-w-full flex-col items-center md:flex-row px-10 lg:px-40 gap-6 md:mt-10 md:min-w-[950px]">
      <div className="w-full md:w-[75%] flex flex-col space-y-4  md:mt-20">
        <h1 className="text-7xl font-bolds">Sobre mí</h1>
        <p className="text-xl ">
          Estudiante del 10mo ciclo de la carrera de Ingeniería de Sistemas e
          Informática de la Universidad Tecnológica del Perú, perteneciente al
          décimo superior y al programa para alumnos destacados Generación Top
          2024. Con experiencia en proyectos académicos, realizando desarrollo
          web, gestión de datos y análisis de requerimientos. Con sólidos
          conocimientos en el manejo de Git y GitHub, Power BI y Excel. Con
          interés en desarrollarme profesionalmente en el área de gestión de
          proyectos tecnológicos y desarrollo de software. Con facilidad de
          trabajo en equipo, empeño y orientación al logro.
        </p>
        <div className="flex justify-center md:justify-start gap-6 w-full ">
          <ModalContact/>
          <ModalCertificates/>
        </div>
      </div>
      <div className=" flex justify-center w-full h-full  items-center md:w-[25%] ">
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
