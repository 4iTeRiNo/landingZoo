"use client";

import { useState } from "react";
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
    <>
      <button
        className="space-y-2 w-[35px] pl-2 block h-5 z-[11]"
        onClick={() => setIsNavOpen(!isNavOpen)}
        onKeyDown={() => setIsNavOpen(!isNavOpen)}
      >
        {!isNavOpen ? (
          <>
            <span className="block h-0.5 w-[26px] duration-500 animate-pulse bg-white" />
            <span className="block h-0.5 w-[26px] duration-500 animate-pulse bg-white" />
            <span className="block h-0.5 w-[26px]  animate-pulse bg-white" />
          </>
        ) : (
          <>
            <span className="block h-0.5 w-[26px] duration-300 relative top-[21px] right-5 rotate-45  bg-white z-[11]" />
            <span className="block h-0.5 w-[26px] duration-300 relative top-[11px] right-5 rotate-[135deg] bg-white z-[11]" />
          </>
        )}
      </button>
      {isNavOpen ? (
        <section
          ref={menuRef}
          className="flex flex-col animate-moveToLeft gap-y-[25px] py-4 px-[18px] absolute w-11/12 h-[600px] z-[10] left-0 right-0 mx-auto space-y-0 top-[30px] bottom-0 rounded-md  bg-stone-850 "
        >
          <section className="flex flex-col gap-y-[42px]">
            <Toggle className="animate-moveToLeftLinks" />
            <div className="flex flex-col items-start gap-y-5">
              {navigateLinks.map((link) => (
                <li
                  className="text-white text-[18px] font-medium list-none animate-[moveToLeftLinks_0.6s_ease-in-out_forwards]"
                  key={link.id}
                >
                  {link.text}
                </li>
              ))}
            </div>
            <div className="flex flex-col w-full  gap-y-4 text-white items-start">
              <Title
                className="w-full text-left animate-[moveToLeftLinks_0.7s_ease-in-out_forwards]"
                text="Контакты"
              />
              {mutateContacts.map((contact) => (
                <li
                  key={contact.id}
                  className="flex flex-col items-start animate-[moveToLeftLinks_0.8s_ease-in-out_forwards] w-full border-b-[1px] border-stone-750  pb-4 last:border-none last:pb-0"
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
                className="aspect-square animate-[moveToLeftLinks_1s_ease-in-out_forwards]"
                src={social.image}
                alt={social.text}
              />
            ))}
          </section>
        </section>
      ) : null}
    </>
  );
};
export default HamburgerMenu;
