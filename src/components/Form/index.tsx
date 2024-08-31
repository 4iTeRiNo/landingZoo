"use client";

/* eslint-disable react/jsx-props-no-spreading */

import { Forms, Genders } from "@/shared/constant/formProps";
import { FormValues } from "@/shared/types";
import { DatePicker, TimeInput } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
// import Link from "next/link";
import { convertPhoneNumber, handleChange } from "@/shared/utils";
import { useRouter } from "next/navigation";
import AccentButton from "../ButtonAccent";
import Title from "../TitleAccent";
import Loader from "../Loader";
// import { redirect } from "next/navigation";
// import { navigate } from "@/shared/utils/redirectFn";

export default function FormComponent() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({ mode: "onChange" });
  // eslint-disable-next-line no-console
  const [isShowLoader, setIsShowLoader] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // фейковая отправка данных
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      // console.log("Успех:", result);
      setIsShowLoader(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      }); // Simulate 5000;
      setIsShowLoader(false);
      router.push("/");
    } catch (error) {
      // console.error("Ошибка:", error);
    }
  };

  // const onSubmit = handleSubmit((data) => console.log(data));

  // фейковая отправка данных

  useEffect(() => {
    reset();
  }, [handleSubmit, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-5 pb-[36px] items-center w-full text-stone-550"
    >
      {isShowLoader && <Loader />}
      <section className="">
        <span className="w-full text-blue-700 cursor-pointer left-7">
          Добавить изображение
        </span>
        <label
          htmlFor="file"
          className="flex relative w-full flex-row gap-x-3 z-10 cursor-pointer"
        >
          {}
          <input
            {...register("file")}
            type="file"
            name="file"
            multiple
            size={30720}
            accept="image/*"
            className=" z-10 relative hover:cursor-pointer [type=file:opacity-0]"
          />
        </label>
      </section>

      {Forms.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.registerName}
            className={`w-full border-b-[1px] leading-6 border-borderColor `}
          >
            <input
              {...register(form.registerName, {
                // required: true,
                pattern: {
                  value: form.validate,
                  message: form.message,
                },
              })}
              id={form.registerName}
              placeholder={form.placeholder}
              type={form.type}
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px] ${errors && "error"} appearance-none`}
            />
            {form.validate && errors[form.registerName] && (
              <span className="text-[12px] text-red-400">
                {`${form?.message}`}
              </span>
            )}
          </label>
        );
      })}

      <section className="flex flex-col w-full gap-y-4">
        <section
          className="w-full flex flex-col justify-around 
        rounded-md bg-bgStone750 px-3 py-3"
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
                <label
                  className="container border-b-1 border-borderColor pb-4 last:border-none"
                  htmlFor="gender"
                >
                  <input
                    {...field}
                    id="gender"
                    type="radio"
                    value={gender.value}
                    onChange={() => field.onChange(gender.value)}
                  />
                  <span className="checkmark" />
                  {gender.label}
                </label>
              )}
            />
          ))}
        </section>
      </section>

      <section className="flex w-full">
        <div className="w-full h-fit flex flex-col gap-y-4 rounded-md bg-bgStone750 px-3 py-3">
          <Title className="text-white" text="Контакты" />
          <label
            htmlFor="tel"
            className={`w-full border-b-[1px] leading-6 border-borderColor `}
          >
            <input
              {...register("tel", {
                required: true,
              })}
              id="tel"
              placeholder="Рабочий номер телефона"
              type="tel"
              onChange={(e) =>
                setValue("tel", convertPhoneNumber(e.target.value))
              }
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px] ${errors && "error"}`}
            />
          </label>
          <Controller
            name="date"
            control={control}
            render={() => (
              <DatePicker
                label="Дата"
                className="w-full pt-3 "
                isRequired
                onChange={(date) =>
                  handleChange(date.toDate("Europe/Moscow"), setValue)
                }
                validationBehavior="aria"
              />
            )}
          />
          <Controller
            name="time"
            control={control}
            render={() => (
              <TimeInput
                label="Время"
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

      <AccentButton
        actionType="submit"
        className={`${Object.keys(errors).length > 0 && "opacity-50"}`}
        text="Сохранить"
      />
    </form>
  );
}
