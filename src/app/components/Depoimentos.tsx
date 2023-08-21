"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { CardDepoimento } from "./CardDepoimento";

export function Depoimentos() {

  
  return (
    <section className="pb-16">
      <h1 className="text-center mt-8 text-darkBlue-50 font-medium text-2xl">
        Depoimentos
      </h1>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="flex justify-center"
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide>
          <CardDepoimento
            title="Muito muito legal"
            text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."'
            author="-Christian"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDepoimento
            title="Muito muito legal"
            text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."'
            author="-Christian"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDepoimento
            title="Muito muito legal"
            text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."'
            author="-Christian"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
