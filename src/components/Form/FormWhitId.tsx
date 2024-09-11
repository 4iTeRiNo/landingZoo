"use client";

import { patternValueOfNumber, userId } from "@/shared/constant";
import { InfoPet } from "@/shared/mock";
import { FormsCreateAnimal, Genders } from "@/shared/constant/formProps";
import { ClockCircleIcon } from "@/shared/svg";
import {
  ErrorKeyMessage,
  FormAnimalValues,
  keyAnimalValues,
} from "@/shared/types";
import { convertPhoneNumber } from "@/shared/utils";
import { parseTime } from "@internationalized/date";
import { TimeInput } from "@nextui-org/react";
import { parsePhoneNumber } from "libphonenumber-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import Loader from "../Loader";
import Title from "../TitleAccent";
import Weekdays from "./Weekday";

interface Props {
  params: {
    id: string;
  };
}

function FormComponentWithId({ params: { id } }: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormAnimalValues>({ mode: "onChange" });

  const dataPet = InfoPet.find((item) => item.id === +id);

  const [isShowLoader, setIsShowLoader] = useState<boolean>(false);
  const [isShowResult, setIsShowResult] = useState<ErrorKeyMessage>("loading");
  const isError = Object.keys(errors).length > 0;
  const nav = useRouter();

  const onSubmit = async (data: FormAnimalValues) => {
    const formData = new FormData();

    setIsShowLoader(true);

    formData.append("access_key", "b301e687-af2a-43b5-8bea-5ca49d0bc77f");
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    formData.append("file", data.file[0]);
    formData.append("tel", parsePhoneNumber(data.tel, "RU").number);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    setTimeout(() => setIsShowLoader(false), 4000); // Показываем лоадер 3 сек
    if (res.success) {
      setIsShowResult("success");
      nav.push(`/animal-card/${userId}`);
    } else {
      setIsShowResult("error");
    }
  };

  useEffect(() => {
    reset();
  }, [handleSubmit, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-5 pb-[36px] items-start w-full text-stone-550"
      method="post"
    >
      <span className="flex w-full justify-center">
        {isShowLoader && <Loader isShowResult={isShowResult} />}
      </span>

      <section className="z-0 relative left-0 items-start pt-4">
        <span className="w-full text-blue-700 cursor-pointer left-7">
          Добавить изображение
        </span>
        <label
          htmlFor="file"
          className="flex relative w-full flex-row gap-x-3 z-10 cursor-pointer"
        >
          <input
            {...register("file")}
            type="file"
            name="file"
            multiple
            size={30720}
            accept="image/png, image/jpeg"
            className="z-10 relative hover:cursor-pointer [type=file:opacity-0]"
          />
        </label>
      </section>
      {FormsCreateAnimal.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.register_name}
            className={`w-full border-b-[1px] leading-6 ${errors[form.register_name as keyAnimalValues] ? "border-red-400" : "border-borderColor"}`}
          >
            <input
              {...register(form.register_name as keyAnimalValues, {
                required: form.message,
                validate: (form.type === "text" && form.validate) || undefined,
              })}
              id={form.register_name}
              autoComplete="off"
              defaultValue={
                dataPet?.pet_info[form.register_name as keyAnimalValues]
              }
              placeholder={form.placeholder}
              type={form.type}
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px] appearance-none`}
            />
            {errors[form.register_name as keyAnimalValues] && (
              <span className="text-[12px] text-errorMessage">
                {`${errors[form.register_name as keyAnimalValues]?.message}` ||
                  "Введите корректные данные"}
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
                    type="radio"
                    id="gender"
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
                pattern: {
                  value: patternValueOfNumber,
                  message: "Номер введен некорректно",
                },
                minLength: {
                  value: 11,
                  message: "Номер слишком короткий",
                },
                maxLength: {
                  value: 18,
                  message: "Номер слишком длинный",
                },
              })}
              id="tel"
              placeholder="Рабочий номер телефона"
              type="tel"
              defaultValue={dataPet?.pet_info.tel ?? ""}
              onChange={(e) =>
                setValue("tel", convertPhoneNumber(e.target.value))
              }
              className={`bg-transparent w-full text-white pl-[10px] text-sm placeholder:text-base 
                focus-visible:outline-none h-[35px]`}
            />
            {errors.tel && errors?.name?.message && (
              <span className="text-[12px] text-errorMessage">
                {`${errors?.tel?.message}`}
              </span>
            )}
          </label>
          <Controller
            name="days"
            control={control}
            render={() => (
              <Weekdays dataDays={["Вс", "Пн"]} setValue={setValue} />
            )}
          />
          <section className="flex flex-row gap-x-5">
            <Controller
              name="time_start"
              control={control}
              render={({ field }) => (
                <TimeInput
                  label="Начало рабочего дня"
                  isRequired
                  errorMessage="Выберите время начала рабочего дня"
                  isInvalid={!field.value}
                  hourCycle={24}
                  id="timeStart"
                  granularity="minute"
                  endContent={
                    <ClockCircleIcon className="text-xl  pointer-events-none flex-shrink-0" />
                  }
                  onChange={(time) => setValue("time_start", `${time}`)}
                />
              )}
            />
            <Controller
              name="time_end"
              control={control}
              render={({ field }) => (
                <TimeInput
                  label="Конец рабочего дня"
                  hourCycle={24}
                  id="timeStart"
                  isRequired
                  errorMessage="Выберите время окончания рабочего дня"
                  isInvalid={!field.value}
                  fullWidth
                  granularity="minute"
                  endContent={
                    <ClockCircleIcon className="text-xl  pointer-events-none flex-shrink-0" />
                  }
                  onChange={(time) => setValue("time_end", `${time}`)}
                />
              )}
            />
          </section>
        </div>
      </section>
      <CustomButton
        actionType="submit"
        isDisabled={isError}
        className={`${isError && "opacity-50"}`}
        text="Сохранить"
      />
    </form>
  );
}
export default FormComponentWithId;
