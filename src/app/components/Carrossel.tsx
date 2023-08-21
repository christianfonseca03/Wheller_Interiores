"use client";

import QuartoRP from "../assets/capa_quartoRP.jpg";
import QuartoAN from "../assets/capa_quartoAN.jpg";
import LivingRP from "../assets/capa_Living_RP.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export function Carrossel() {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="md:h-[613px]"
        navigation
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src={QuartoRP.src} alt="carrossel" className=" h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LivingRP.src} alt="carrossel" className=" h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuartoAN.src} alt="carrossel" className=" h-full w-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
