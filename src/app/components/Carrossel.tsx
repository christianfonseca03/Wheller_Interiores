"use client";

import Interiores1 from "../assets/interiores1.jpg";
import Interiores2 from "../assets/interiores2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css"
import "swiper/css/navigation";

export function Carrossel() {
  
  return (
    <section>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="md:h-[613px]"
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            src={Interiores1.src}
            alt="carrossel"
            className=" h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Interiores2.src}
            alt="carrossel"
            className=" h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Interiores1.src}
            alt="carrossel"
            className=" h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
