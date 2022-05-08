import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Values1 from "./values1";
import Values2 from "./values2";
import Values3 from "./values3";
import "swiper/css/bundle";
import { Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slideshow() {
  return (
    <>
      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Values1 />
        </SwiperSlide>
        <SwiperSlide>
          <Values2 />
        </SwiperSlide>
        <SwiperSlide>
          <Values3 />
        </SwiperSlide>
      </Swiper>{" "}
    </>
  );
}
