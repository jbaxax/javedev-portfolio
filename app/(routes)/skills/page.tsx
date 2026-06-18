import SliderServices from "./components/slider-services";

export default function Skills() {
  return (
    <div className="flex flex-col h-screen gap-6 lg:flex-row items-center justify-center  px-10 lg:px-40 lg:min-w-[930px] mt-24 md:mt-0">
      <div className="max-w-[650px]">
        <h1 className="text-4xl md:text-7xl ">Skills</h1>
        <p className="mt-4 text-xl md:text-2xl">
          I'm a Frontend Developer specialized in building production-ready
          web applications with Next.js (App Router), React, and TypeScript.
          I integrate REST APIs with TanStack Query and Axios, and handle
          complex form logic and validation with Zod and React Hook Form.
          I build clean, responsive interfaces with Shadcn/ui and
          TailwindCSS, and also work with Laravel and PHP when full-stack
          collaboration is needed.
        </p>
      </div>
      <div className="max-w-[300px] md:max-w-[550px]">
        <SliderServices />
      </div>
    </div>
  );
}
