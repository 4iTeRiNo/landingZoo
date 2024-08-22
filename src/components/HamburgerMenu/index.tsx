"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { mockContacts, mockSocial, navigateLinks } from "@/shared/constant";

import useOutsideClick from "@/shared/hooks/useOutSideClick";
import Toggle from "../ToggleLanding";
import Title from "../TitleAccent";

const HamburgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuRef = useOutsideClick(() => {
    setIsNavOpen(false);
  });

  const mutateContacts = mockContacts.filter(
    (contact) => contact.title === "Email" || contact.title === "Телефон"
  );

  return (
    <section ref={menuRef}>
      <button
        className={`relative flex flex-col space-y-2 w-[26px] h-10px bottom-0 
          ${isNavOpen && "right-[12px]"}  right-0 block  z-[13]`}
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        onKeyDown={() => setIsNavOpen(!isNavOpen)}
      >
        {" "}
        <span
          className={`inline-block h-0.5 w-[26px] relative animate-moveToTop 
            ${isNavOpen && "duration-700 rotate-[135deg] top-[5px] "} rotate-0  bg-white`}
        />
        <span
          className={`inline-block h-0.5 w-[26px] relative animate-moveToTop 
            ${isNavOpen && "duration-700 rotate-[225deg] top-[-5px]"} rotate-0  bg-white`}
        />
        <span
          className={`block h-0.5 w-[26px] animate-moveToTop ${isNavOpen && "hidden"} rotate-0  bg-white`}
        />
      </button>
      {isNavOpen && (
        <section
          className="flex flex-col animate-moveToLeft  gap-y-[25px] py-4 px-[18px] absolute w-11/12 
          h-[600px] z-[11] left-0 right-0 mx-auto space-y-0 top-[30px] bottom-0 rounded-md bg-stone-850 "
        >
          <section className="flex flex-col gap-y-[42px]">
            <Toggle className="animate-moveToLeftLinks" />
            <div className="flex flex-col items-start gap-y-[15px]">
              {navigateLinks.map((link) => (
                <li
                  className="text-white text-[20px] font-medium list-none 
                  animate-[moveToLeftLinks_1.3s]"
                  key={link.id}
                >
                  {link.text}
                </li>
              ))}
            </div>
            <div className="flex flex-col w-full gap-y-4 text-white items-start">
              <Title
                className="w-full text-left animate-[moveToLeftLinks_1.4s]"
                text="Контакты"
              />
              {mutateContacts.map((contact) => (
                <li
                  key={contact.id}
                  className="flex flex-col gap-y-1 items-start 
                  animate-[moveToLeftLinks_1.5s] w-full border-b-[1px]
                  border-stone-750  pb-4 last:border-none last:pb-0"
                >
                  <h4 className="text-[16px] font-medium leading-none">
                    {contact.title}
                  </h4>
                  <span className="text-[12px] leading-normal">
                    {contact.contact}
                  </span>
                </li>
              ))}
            </div>
          </section>

          <section className="flex flex-row gap-x-6">
            {mockSocial.map((social) => (
              <Image
                key={social.id}
                width={26}
                height={26}
                className="aspect-square animate-[moveToLeftLinks_1.6s]"
                src={social.image}
                alt={social.text}
              />
            ))}
          </section>
        </section>
      )}
    </section>
  );
};
export default HamburgerMenu;
