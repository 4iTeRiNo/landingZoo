import { mockSocial, navigateLinks } from "@/shared/constant";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-indigo-950">
      <section>
        <ul
          className="flex flex-row flex-wrap text-white gap-x-5 gap-y-5  justify-center 
        list-disc first:marker:text-transparent"
        >
          {navigateLinks.map((link) => (
            <li
              key={link.id}
              className="text-[12px] leading-[140%] text-nowrap marker:text-green-600 pr-5"
            >
              {link.text}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-row justify-between px-[10px] pt-5   border-t-[1px] border-stone-750">
        <div className="flex flex-col gap-y-3 ">
          <h4 className="text-[11px] text-stone-750">
            Политика конфиденциальности
          </h4>
          <h4 className="text-[11px] text-stone-750">Условия использования</h4>
        </div>
        <div className="flex flex-row gap-x-5">
          {mockSocial.map((social) => (
            <Image
              key={social.id}
              width={20}
              height={20}
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
