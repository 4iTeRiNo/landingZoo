import Form from "@/components/Form";
import SliderAnimal from "@/components/Slider";
import UpLoadForm from "@/components/UpLoad/UpLoadForm";
import React from "react";

export default function Animal() {
  return (
    <main className="flex flex-col bg-indigo-950 px-[15px] overflow-x-hidden">
      <section className="w-full">
        <SliderAnimal />
        <UpLoadForm />
      </section>
      <Form />
    </main>
  );
}
