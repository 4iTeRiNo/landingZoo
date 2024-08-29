"use client";

/* eslint-disable react/jsx-props-no-spreading */

import { Forms, Genders } from "@/shared/constant/formProps";
import { FormValues, SelectOptions } from "@/shared/types";
import { DatePicker, TimeInput } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Title from "../TitleAccent";

export default function FormComponent() {
  const [gender, setGender] = useState("Пол");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({ mode: "onChange" });
  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => console.log(data));
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleChange = (value: Date) => {
    setValue("date", value.toISOString());
  };

  useEffect(() => {
    reset();
  }, [handleSubmit, reset]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-5 pb-[36px] items-center w-full text-stone-550"
    >
      {Forms.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.registerName}
            className={`w-full border-b-[1px] leading-6 border-stone-890 `}
          >
            <input
              {...register(form.registerName, {
                required: true,
                pattern: {
                  value: form.validate,
                  message: form.message,
                },
              })}
              id={form.registerName}
              placeholder={form.placeholder}
              type={form.type}
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px] ${errors && "error"}`}
            />
            {form.validate && errors[form.registerName] && (
              <span className="text-[12px] text-red-400">
                {`${form?.message}`}
              </span>
            )}
          </label>
        );
      })}

      <section className="flex flex-col w-full gap-y-4 px-[2.78vw]">
        <section
          className="w-full flex justify-between"
          onClick={() => setIsVisible(!isVisible)}
          aria-hidden="true"
        >
          <label
            htmlFor="gender"
            className={`${gender === "Пол" ? "text-stone-550" : "text-white"}`}
            title="Пол"
          >
            {gender}
          </label>

          <Image
            className={`${isVisible ? "rotate-180" : "rotate-0"} duration-500`}
            src="/arrow-faq.svg"
            width={12}
            height={12}
            alt="arrow"
          />
        </section>

        <section
          className={`w-full ${isVisible ? "animate-animateVisible " : "hidden"} delay-500 flex flex-col justify-around 
        rounded-md bg-stone-850 px-3 py-3`}
        >
          <Title
            className="text-white pb-4"
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

      <section className="flex w-full px-[2.78vw]">
        <div className="w-full h-fit flex flex-col gap-y-4 rounded-md bg-stone-850 px-3 py-3">
          <Title className="text-white" text="Добавить время работы" />
          <Controller
            name="date"
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
            name="time"
            control={control}
            render={() => (
              <TimeInput
                label="Meeting time"
                hourCycle={24}
                isRequired
                granularity="minute"
                onChange={(time) =>
                  setValue("time", `${time.hour}:${time.minute}`)
                }
              />
            )}
          />
        </div>
      </section>

      <button
        disabled={Object.keys(errors).length > 0}
        className={`z-[7] flex flex-row gap-x-[3.2vw] items-center w-full justify-center rounded-md border border-transparent bg-green-750 
      px-8 py-3 text-base font-medium text-white hover:bg-green-700 disabled:transparent
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
      ${Object.keys(errors).length > 0 && "opacity-50"}`}
      >
        Сохранить
      </button>
    </form>
  );
}
