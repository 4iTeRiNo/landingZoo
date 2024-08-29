"use client";

/* eslint-disable react/jsx-boolean-value */
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";

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
  const [instance, setInstance] = useState<SwiperClass | null>(null);
  const swiperElRef = useRef<SwiperRef>(null);
  return (
    <>
      <Swiper
        hashNavigation={{ replaceState: false, watchState: false }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: instance }}
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
        ref={swiperElRef}
        onSwiper={setInstance}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{ overflow: "visible" }}
        className="mx-auto mt-3"
      >
        {MapImage.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              width={161}
              height={93}
              src={img.path}
              alt={img.alr}
              className="w-full object-cover"
              style={{ height: "93px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderAnimal;
