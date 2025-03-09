"use client";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "../styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { dataTestimonials } from "../../data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SliderTestimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // no renderiza nada hasta que el cliente este listo

  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="sliderTestimonials h-[450px] max-w-[350px]"
    >
      {dataTestimonials.map((data) => (
        <SwiperSlide
          key={data.id}
          className="flex justify-center items-center h-screen"
        >
          <Card className="flex flex-col justify-center items-center h-auto border-0 shadow-none p-4">
            <Image
              src={data.url}
              width={200}
              height={200}
              alt="testimonio"
              className="object-cover w-48 h-48 rounded-full"
            />
            <CardHeader>
              <CardTitle className="text-center mb-2">{data.name}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
