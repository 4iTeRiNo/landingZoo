import { mockSocial, navigateLinks } from "@/shared/mock";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-bgColor pt-[11.1vw] gap-y-[11.1vw] pb-[7.22vw]">
      <section className="m-auto w-[92vw]">
        <ul
          className="flex flex-row flex-wrap text-white gap-x-5 gap-y-[5vw] justify-center 
        list-disc first:marker:text-transparent"
        >
          {navigateLinks.map((link) => (
            <li
              key={link.id}
              className="text-xs leading-6 text-nowrap marker:text-accentColor pr-5"
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex flex-row items-center justify-between px-[2.8vw] pt-5 border-t-[1px] 
      border-borderColor"
      >
        <div className="flex flex-col gap-y-3 ">
          <h4 className="text-xs leading-7 text-greyText">
            Политика конфиденциальности
          </h4>
          <h4 className="text-xs leading-7 text-greyText">
            Условия использования
          </h4>
        </div>
        <div className="flex flex-row gap-x-5">
          {mockSocial.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className="w-7 h-auto aspect-square"
              aria-label={social.text}
            >
              <social.image />
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
