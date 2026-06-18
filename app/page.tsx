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
              <p className="text-xl lg:text-2xl">Hello, I'm</p>
              <h1 className="text-4xl lg:text-6xl font-bold">Walter Jave</h1>
              <p className="text-xl lg:text-2xl">
                And I'm a{" "}
                <span className="font-bold">Frontend Developer</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center lg:justify-start">
              <Button className="hover:bg-white hover:text-black hover:border-black hover:shadow-lg cursor-pointer transition-colors duration-400 w-40 lg:w-50">
                <Link
                  target="_blank"
                  href="https://utpedupe-my.sharepoint.com/:w:/g/personal/u19206658_utp_edu_pe/ERqsAUFP831DtjbmYqVqADwBy8AZ_zZnj_lOtXc9e7_ELQ?e=2tsYq9"
                  className="flex justify-center items-center gap-2"
                >
                  Download CV <Download />
                </Link>
              </Button>

              <SocialNetworks />
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8 space-y-4 text-sm lg:text-base leading-relaxed">
            <p>
              <strong>Frontend Developer</strong> with over 10 months of
              experience building web applications in production with
              Next.js, React and TypeScript.
            </p>
            <p>
              I have implemented complex UI logic such as{" "}
              <strong>nested role and permission systems</strong>,
              dynamic forms with +10 conditional fields and ecommerce with
              ISR generating <strong>+530 static routes</strong>.
            </p>
            <p>
              I integrate REST APIs with <strong>TanStack Query and Axios</strong>, and
              apply robust validation with <strong>Zod and React Hook Form</strong>{" "}
              along with modern interfaces using <strong>shadcn/ui</strong> and
              TailwindCSS.
            </p>
            <p>
              Graduate of Systems Engineering and Information Technology from the
              Universidad Tecnológica del Perú, member of the{" "}
              <strong>Generación Top 2024</strong> program (top ten).
            </p>
            <p>
              I am characterized by my{" "}
              <strong>commitment to continuous learning</strong> and the
              delivery of complete functionalities from end to end in an
              autonomous manner.
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