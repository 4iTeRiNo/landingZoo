"use client";

import { Forms, Genders } from "@/shared/constant/formProps";
import { FormValues, key } from "@/shared/types";
import convertPhoneNumber from "@/shared/utils";
import { TimeInput } from "@nextui-org/react";
// import { useRouter } from "next/navigation";
import { ClockCircleIcon } from "@/shared/svg";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AccentButton from "../ButtonAccent";
import Loader from "../Loader";
import Title from "../TitleAccent";
import Weekdays from "./Weekday";

export default function FormComponent() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({ mode: "onChange" });
  const [isShowLoader, setIsShowLoader] = useState(false);

  // const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    const formData = new FormData();
    setIsShowLoader(true);

    formData.append("access_key", "b301e687-af2a-43b5-8bea-5ca49d0bc77f");

    // for (const key in data) {
    //   if (key === "file") formData.append(key, data[key][0]);
    //   formData.append(key, data[key as key]);
    // }

    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .finally(() => setIsShowLoader(false));

    // if (res.success) {
    //   console.log("Success", res);
    // } else {
    //   console.log("Error", res);
    // }
    setTimeout(() => {
      setIsShowLoader(false);
    }, 4000);
  };

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
            accept="image/png, image/jpeg"
            className=" z-10 relative hover:cursor-pointer [type=file:opacity-0]"
          />
        </label>
      </section>

      {Forms.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.registerName}
            className={`w-full border-b-[1px] leading-6 ${errors[form.registerName] ? "border-red-400" : "border-borderColor"}`}
          >
            <input
              {...register(form.registerName, {
                required: form.message,
                pattern: {
                  value: form.validate,
                  message: "Введине корректные данные",
                },
              })}
              id={form.registerName}
              autoComplete="off"
              placeholder={form.placeholder}
              type={form.type}
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px] appearance-none`}
            />
            {form.validate && errors[form.registerName] && (
              <span className="text-[12px] text-errorMessage">
                {`${errors[form.registerName]?.message}`}
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
                  className={`container border-b-1 ${errors.gender ? "border-errorMessage" : "border-borderColor"} pb-4 last:border-none`}
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
          {errors.gender && (
            <span className="text-[12px] text-errorMessage">Выбирите пол</span>
          )}
        </section>
      </section>

      <section className="flex w-full">
        <div className="w-full h-fit flex flex-col gap-y-4 rounded-md bg-bgStone750 px-3 py-3">
          <Title className="text-white" text="Контакты" />
          <label
            htmlFor="tel"
            className={`w-full border-b-[1px] leading-6 ${errors.tel ? "border-errorMessage" : "border-borderColor"}`}
          >
            <input
              {...register("tel", {
                required: { value: true, message: "введите корректные данные" },
                pattern: {
                  // @ts-ignore
                  value: /^\8 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                  message: "Введите корректное значение",
                },
              })}
              id="tel"
              placeholder="Рабочий номер телефона"
              type="tel"
              onChange={(e) =>
                setValue("tel", convertPhoneNumber(e.target.value))
              }
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px]`}
            />
            {errors.tel && (
              <span className="text-[12px] text-errorMessage">
                {`${errors?.tel?.message}`}
              </span>
            )}
          </label>
          <Controller
            name="days"
            control={control}
            rules={{ required: "Укажите рабочие дни" }}
            render={() => <Weekdays setValue={setValue} />}
          />
          <Controller
            name="time"
            control={control}
            render={({ field: { value } }) => (
              <section className="flex flex-row gap-x-5">
                <TimeInput
                  label="Начало рабочего дня"
                  hourCycle={24}
                  id="time1"
                  granularity="minute"
                  endContent={
                    <ClockCircleIcon className="text-xl  pointer-events-none flex-shrink-0" />
                  }
                  onChange={(time) =>
                    setValue("time.timeStart", `${time.hour}:${time.minute}`)
                  }
                />
                <TimeInput
                  label="Конец рабочего дня"
                  hourCycle={24}
                  id="time"
                  granularity="minute"
                  endContent={
                    <ClockCircleIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  onChange={(time) =>
                    setValue("time.timeEnd", `${time.hour}:${time.minute}`)
                  }
                />
              </section>
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
