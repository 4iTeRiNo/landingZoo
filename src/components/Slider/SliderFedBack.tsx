"use client";

import { mockComments } from "@/shared/mock";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../TitleAccent";

const SliderFedBack = () => {
  return (
    <Swiper
      pagination
      modules={[Pagination]}
      className="flex w-full gap-x-20  flex-row  text-white"
    >
      {mockComments.map((comment) => (
        <SwiperSlide
          key={comment.id}
          style={{
            width: "330px",
            height: "267px",
          }}
          className="items-start w-[91.6vw] mr-1 text-white bg-bgStone750 py-3 rounded-md px-[2.78vw]"
        >
          <Title text="Отзывы" />
          <section className="flex flex-col pt-4 gap-y-[1.4vw]">
            <h4 className="text-base font-medium">{comment.name}</h4>
            <span className="text-xs leading-6 text-greyText">
              {comment.subtitle}
            </span>
            <p className="text-sm text-balance">{comment.comment}</p>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderFedBack;
