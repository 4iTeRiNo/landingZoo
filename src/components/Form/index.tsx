"use client";

/* eslint-disable react/jsx-props-no-spreading */

import { SelectOptions } from "@/shared/types";
import { DatePicker, TimeInput } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AccentButton from "../ButtonAccent";
import Title from "../TitleAccent";

type FormValues = {
  name: string;
  gender: string;
  breed: string;
  weight: string;
  feature: string;
  age: string;
  phone: string;
  workDate: string;
  workTime: string;
  // error: string
};

enum GenderEnum {
  female = "female",
  male = "male",
}

const Genders: SelectOptions[] = [
  {
    id: 1,
    value: GenderEnum.female,
    label: "Девочка",
  },
  {
    id: 2,
    value: GenderEnum.male,
    label: "Мальчик",
  },
];

export default function App() {
  const [gender, setGender] = useState("Пол");

  const {
    register,
    control,
    handleSubmit,
    // formState: { error },
    setValue,
    reset,
  } = useForm<FormValues>();
  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => console.log(data));

  const handleChange = (value: Date) => {
    setValue("workDate", value.toISOString());
  };

  useEffect(() => {
    reset();
  }, [handleSubmit, reset]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-5 pb-[36px] items-center w-full text-stone-550"
    >
      <label
        htmlFor="name"
        className={`w-full border-b-[1px]  leading-6 border-stone-890 `}
      >
        <input
          {...register("name")}
          id="name"
          placeholder="Имя"
          type="text"
          className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                    focus-visible:outline-none  h-[35px] `}
        />
      </label>
      <label
        htmlFor="breed"
        className={`w-full border-b-[1px]  leading-6 border-stone-890 `}
      >
        <input
          {...register("breed")}
          id="breed"
          type="text"
          placeholder="Порода"
          className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base
                      focus-visible:outline-none  h-[35px] `}
        />
      </label>
      <label
        htmlFor="age"
        className={`w-full border-b-[1px]  leading-6 border-stone-890 `}
      >
        <input
          {...register("age")}
          id="age"
          type="number"
          placeholder="Возраст"
          className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base
                      focus-visible:outline-none  h-[35px] `}
        />
      </label>
      <label
        htmlFor="weight"
        className={`w-full border-b-[1px]  leading-6 border-stone-890 `}
      >
        <input
          {...register("weight")}
          id="weight"
          type="number"
          placeholder="Вес"
          className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base
                      focus-visible:outline-none  h-[35px] `}
        />
      </label>
      <label
        htmlFor="phone"
        className={`w-full border-b-[1px]  leading-6 border-stone-890 `}
      >
        <input
          id="phone"
          type="tel"
          placeholder="Телефон"
          {...register("phone")}
          className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base
                      focus-visible:outline-none  h-[35px] `}
        />
      </label>
      <label
        htmlFor="feature"
        className={`w-full border-b-[1px]  leading-6 border-stone-890 `}
      >
        <input
          id="feature"
          type="text"
          placeholder="Особые приметы или аллергии "
          {...register("feature")}
          className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base
                      focus-visible:outline-none  h-[35px] `}
        />
      </label>

      <section className="flex flex-col w-full gap-y-4">
        <section className="w-full flex justify-between">
          <label
            htmlFor="gender"
            className={`${gender === "Пол" ? "text-stone-550" : "text-white"}`}
            title="Пол"
          >
            {gender}
          </label>
          <Image src="/arrow-faq.svg" width={12} height={12} alt="arrow" />
        </section>

        <section className="w-[91.6vw] h-[40.8vw] rounded-md bg-stone-850 px-3 py-3">
          <Title
            className="text-white border-b-[1px] border-stone-750 pb-4"
            text="Выберите пол  вашего питомца"
          />
          {Genders.map((gender) => (
            <Controller
              control={control}
              key={gender.id}
              name="gender"
              rules={{ required: "Выбирите пожалуйста пол питомца" }}
              render={({ field }) => (
                <label className="container" htmlFor="gender">
                  <input
                    {...field}
                    id="gender"
                    type="radio"
                    value={gender.value}
                    onChange={() =>
                      field.onChange(gender.value, setGender(gender.label))
                    }
                  />
                  <span className="checkmark" />
                  {gender.label}
                </label>
              )}
            />
          ))}
        </section>
      </section>

      <section className="w-[91.6vw] h-fit flex flex-col gap-y-4 rounded-md bg-stone-850 px-3 py-3">
        <Title text="Добавить время работы" />
        <Controller
          name="workDate"
          control={control}
          render={() => (
            <DatePicker
              label="Рабочие часы"
              className="w-full pt-3"
              isRequired
              onChange={(date) => handleChange(date.toDate("Europe/Moscow"))}
              validationBehavior="aria"
            />
          )}
        />
        <Controller
          name="workTime"
          control={control}
          render={() => (
            <TimeInput
              label="Meeting time"
              hourCycle={24}
              isRequired
              granularity="minute"
              onChange={(time) =>
                setValue("workTime", `${time.hour}:${time.minute}`)
              }
            />
          )}
        />
      </section>

      <AccentButton text="Сохранить" />
    </form>
  );
}
