"use client";

import { mockContacts, mockSocial, navigateLinks } from "@/shared/constant";
import { useState } from "react";
import useOutsideClick from "@/shared/hooks/useOutSideClick";
import Link from "next/link";
import Title from "../TitleAccent";
import AccentButton from "../ButtonAccent";

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
          ${isNavOpen && "right-[12px] bottom-[-2.7vw] "} right-0 block z-[13]`}
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
          className="flex flex-col animate-moveToLeft gap-y-[25px] py-4 px-[5vw] absolute w-11/12 
          h-[625px] z-[12] left-0 right-0 mx-auto space-y-0 top-[30px] bottom-0 rounded-xl bg-bgColor "
        >
          <section className="flex flex-col gap-y-[6.2vw] pt-9">
            <div className="flex flex-col items-start gap-y-[15px]">
              {navigateLinks.map((link) => (
                <li
                  className=" flex flex-row w-full gap-y-5 items-center text-white text-xl font-medium 
                  list-none animate-[moveToLeftLinks_1.3s]"
                  key={link.id}
                >
                  <span className="pr-3">
                    <link.icon />
                  </span>
                  {link.text}
                </li>
              ))}
            </div>
            <section className="flex flex-col animate-[moveToLeftLinks_1.5s] gap-y-3 justify-center text-center">
              <AccentButton text="Зарегистрироваться" />
              <Link href="/client" className="text-xs text-greyText">
                Перейти в ZooRama клиент
              </Link>
            </section>
            <div className="flex flex-col w-full gap-y-4 text-white items-start">
              <Title
                className="w-full text-left animate-[moveToLeftLinks_1.7s]"
                text="Контакты"
              />
              {mutateContacts.map((contact) => (
                <li
                  key={contact.id}
                  className="flex flex-col gap-y-1 items-start 
                  animate-[moveToLeftLinks_1.9s] w-full border-b-[1px]
                  border-borderColor  pb-4 last:border-none last:pb-0"
                >
                  <h4 className="text-base leading-7 font-medium">
                    {contact.title}
                  </h4>
                  <span className="text-xs font-normal leading-normal">
                    {contact.contact}
                  </span>
                </li>
              ))}
            </div>
          </section>

          <section className="flex flex-row gap-x-6 animate-[moveToLeftLinks_2.2s]">
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
          </section>
        </section>
      )}
    </section>
  );
};
export default HamburgerMenu;
