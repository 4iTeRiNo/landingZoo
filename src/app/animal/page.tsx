import Form from "@/components/Form";
import Header from "@/components/Header";
import SliderAnimal from "@/components/Slider";
import UploadFileForm from "@/components/UpLoad/FilePond";
// import { UploadFile } from "@/components/UpLoad/UpLoadFile";
import UpLoadForm from "@/components/UpLoad/UpLoadForm";
import Link from "next/link";
import React from "react";

export default function Animal() {
  return (
    <main className="flex pt-[30px] flex-col bg-indigo-950 px-[15px]">
      <section className="w-full">
        <SliderAnimal />
        <UpLoadForm />
        <UploadFileForm />
      </section>
      <Form />
    </main>
  );
}
