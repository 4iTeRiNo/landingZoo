import { mockSocial, navigateLinks } from "@/shared/constant";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-indigo-950 pt-[11.1vw] gap-y-[11.1vw] pb-[7.22vw]">
      <section className="m-auto w-[92vw]">
        <ul
          className="flex flex-row flex-wrap text-white gap-x-5 gap-y-[5vw] justify-center 
        list-disc first:marker:text-transparent"
        >
          {navigateLinks.map((link) => (
            <li
              key={link.id}
              className="text-xs leading-6 text-nowrap marker:text-green-600 pr-5"
            >
              {link.text}
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex flex-row justify-between px-[2.8vw] pt-5 border-t-[1px] 
      border-stone-750"
      >
        <div className="flex flex-col gap-y-3 ">
          <h4 className="text-xs leading-7 text-stone-750">
            Политика конфиденциальности
          </h4>
          <h4 className="text-xs leading-7 text-stone-750">
            Условия использования
          </h4>
        </div>
        <div className="flex flex-row gap-x-5">
          {mockSocial.map((social) => (
            <Image
              key={social.id}
              width={20}
              height={21}
              className="aspect-square"
              src={social.image}
              alt={social.text}
            />
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
