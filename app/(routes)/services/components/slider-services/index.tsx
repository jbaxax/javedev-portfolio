"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../styles.css"
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { serviceData } from "../../data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SliderServices() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation
      modules={[Pagination, Autoplay]}
      className="sliderServices h-[330px] max-w-[550px] md:mt-24"
    >
      {serviceData.map((data) => (
        <SwiperSlide key={data.id} className="w-full flex justify-center">
          <Card className="h-[290px] ">
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription className="mt-4">{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
              
            </CardContent>
            <CardFooter>
              
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
