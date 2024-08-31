"use client";

import CardAnimal from "@/components/CardAnimal";
import SliderAnimal from "@/components/Slider";
import Link from "next/link";
import React from "react";

export default function AnimalInfo() {
  return (
    <main className="flex flex-col gap-y-5 bg-indigo-950 px-[15px] overflow-x-hidden">
      <section>
        <SliderAnimal />
      </section>
      <CardAnimal />
      <Link
        href={"/animal-edit"}
        className="z-[7] flex flex-row gap-x-[3.2vw] items-center w-full justify-center rounded-md border border-transparent bg-green-750 
      px-8 py-3 text-base font-medium text-white hover:bg-green-700 disabled:transparent
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
      "
      >
        Редактировать
      </Link>
    </main>
  );
}
