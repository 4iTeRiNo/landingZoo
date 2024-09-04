import FormComponentWithId from "@/components/Form/FormWhitId";
import SliderAnimal from "@/components/Slider/SliderPets";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function AnimalAdd({ params: { id } }: Props) {
  return (
    <main className="flex flex-col bg-bgColor px-[15px] overflow-x-hidden">
      <section className="w-full">
        <SliderAnimal />
      </section>
      {id && <FormComponentWithId params={{ id }} />}
    </main>
  );
}
