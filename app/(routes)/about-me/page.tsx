import Image from "next/image";

import ModalCertificates from "./components/modal-certificates";

export default function page() {
  return (
    <div className="flex max-w-full h-screen flex-col items-center lg:flex-row px-10 lg:px-40 gap-6 lg:min-w-[950px]">
      <div className="w-full flex flex-col space-y-4 mt-20">
        <h1 className="text-4xl md:text-7xl font-bolds">Sobre mí</h1>
        <p className="text-xl md:text-2xl">
          Frontend Developer with over 10 months of experience professional
          building web applications in production with Next.js (App Router),
          React and TypeScript. I have implemented complex UI logic such as
          nested role and permission systems, dynamic forms with more than 10
          conditional fields and ecommerce with ISR generating +530 static
          routes. I integrate REST APIs with TanStack Query and Axios, applying
          clean architecture and robust validation with Zod and React Hook Form.
          Graduated in Systems and Computer Engineering from Universidad
          Tecnológica del Perú, ranked in the top tenth of my class and part of
          the Generación Top 2024 program for outstanding students. I deliver
          complete, end-to-end features autonomously, with strong teamwork
          skills and a results-driven mindset.
        </p>
        <div className="flex justify-center lg:justify-start gap-6 w-full ">
          <ModalCertificates />
        </div>
      </div>
    </div>
  );
}
