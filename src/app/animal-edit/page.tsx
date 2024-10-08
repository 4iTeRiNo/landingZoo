import FormComponentNewForm from "@/components/Form/NewFrom";
import SliderAnimal from "@/components/Slider/SliderPets";
import React from "react";

export default function AnimalAdd() {
  return (
    <main className="flex flex-col bg-bgColor px-[15px] overflow-x-hidden">
      <section className="w-full">
        <SliderAnimal />
      </section>
      <FormComponentNewForm />
    </main>
  );
}
