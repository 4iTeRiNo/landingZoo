"use client";

/* eslint-disable react/jsx-boolean-value */
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules

const MapImage = [
  { id: 1, path: "https://swiperjs.com/demos/images/nature-1.jpg", alr: "img" },
  { id: 2, path: "https://swiperjs.com/demos/images/nature-2.jpg", alr: "img" },
  { id: 3, path: "https://swiperjs.com/demos/images/nature-3.jpg", alr: "img" },
  { id: 4, path: "https://swiperjs.com/demos/images/nature-4.jpg", alr: "img" },
  { id: 5, path: "https://swiperjs.com/demos/images/nature-5.jpg", alr: "img" },
  { id: 6, path: "https://swiperjs.com/demos/images/nature-6.jpg", alr: "img" },
  { id: 7, path: "https://swiperjs.com/demos/images/nature-7.jpg", alr: "img" },
  { id: 8, path: "https://swiperjs.com/demos/images/nature-8.jpg", alr: "img" },
  { id: 9, path: "https://swiperjs.com/demos/images/nature-9.jpg", alr: "img" },
  {
    id: 10,
    path: "https://swiperjs.com/demos/images/nature-10.jpg",
    alr: "img",
  },
];

const SliderAnimal = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "transparent",
          "--swiper-pagination-color": "transparent",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full relative"
      >
        {MapImage.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              width={380}
              height={221}
              src={img.path}
              alt={img.alr}
              className="w-full max-w-screen-lg m-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{ overflow: "visible" }}
        className="w-full mx-auto mt-3 relative h-1/4"
      >
        {MapImage.map((img) => (
          <SwiperSlide key={img.id} className="w-[161px] h-[200px] ">
            <Image
              width={161}
              height={93}
              src={img.path}
              alt={img.alr}
              className="w-[161px] aspect-square "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderAnimal;
