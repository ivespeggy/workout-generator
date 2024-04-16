
"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css"

// import required modules
import { Pagination, Mousewheel } from "swiper/modules";



export const SwiperComponent = ()=>{
    return(
        <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination,Mousewheel]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="bg-amber-200">The hardest thing to do is Show Up</SwiperSlide>
        <SwiperSlide className="bg-emerald-200">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-teal-400">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-sky-700">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-fuchsia-300">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-rose-400">Slide 6</SwiperSlide>
      </Swiper>
    )
}