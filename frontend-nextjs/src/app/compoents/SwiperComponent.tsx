
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
        <SwiperSlide>The hardest thing to do is Show Up</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    )
}