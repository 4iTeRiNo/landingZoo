"use client";

/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { patternValue } from "@/shared/constant/errorWord";
import { FormRegister, FormValues, SelectOptions } from "@/shared/types";
import AccentButton from "../ButtonAccent";
import DatePickerComponent from "../Date";

enum GenderEnum {
  female = "female",
  male = "male",
}

const formSetting: FormValues[] = [
  {
    id: 1,
    label: {
      text: "Имя питомца",
    },
    input: {
      register: FormRegister.namePet,
      validate: patternValue,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "text",
    },
  },
  {
    id: 2,
    label: {
      text: "Порода",
    },
    input: {
      register: FormRegister.breed,
      validate: patternValue,

      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "text",
    },
  },
  {
    id: 3,
    label: {
      text: "Возвраст",
    },
    input: {
      register: FormRegister.age,
      validate: /^(100|\d{1,2})$/,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "number",
    },
  },
  {
    id: 4,
    label: {
      text: "Пол",
    },
    input: {
      register: FormRegister.gender,
      validate: patternValue,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "text",
    },
  },
  {
    id: 5,
    label: {
      text: "Вес",
    },
    input: {
      register: FormRegister.weight,
      validate: /^(100|\d{1,2})$/,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "number",
    },
  },
  {
    id: 6,
    label: {
      text: "Особоые приметы или аллергии",
    },
    input: {
      register: FormRegister.features,
      validate: patternValue,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "text",
    },
  },
  {
    id: 7,
    label: {
      text: "Время работы ",
    },
    input: {
      register: FormRegister.date,
      validate: /^(100|\d{1,2})$/,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "text",
    },
  },
  {
    id: 8,
    label: {
      text: "Телефон для связи",
    },
    input: {
      register: FormRegister.phone,
      validate: /^(\+7|8)\d{10}$/,
      required: "Обязательное поле",
      message: "Пожалуйста, введите корректное значение",
      type: "text",
    },
  },
];

const Genders: SelectOptions[] = [
  {
    id: 1,
    value: GenderEnum.female,
    text: "Девочка",
  },
  {
    id: 2,
    value: GenderEnum.female,
    text: "Мальчик",
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({ mode: "onChange" });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    reset();
  }, [handleSubmit, reset]);

  return (
    <form
      noValidate
      className="flex flex-col gap-y-5 pb-[36px] items-center w-full text-stone-550"
      onSubmit={handleSubmit(onSubmit)}
    >
      {formSetting.map((form) => {
        const regParams = form.input.register;
        if (regParams) {
          const error = errors[regParams];
          if (regParams === "gender") {
            return (
              <section key={form.id} className="custom_select">
                <select>
                  <option className="text-[12px] text-stone-750">Пол</option>
                  {Genders.map((gender) => (
                    <option
                      key={gender.id}
                      className="text-[12px]"
                      value={gender.value}
                    >
                      {gender.text}
                    </option>
                  ))}
                </select>
              </section>
            );
          }
          if (regParams === "date") {
            return (
              <React.Fragment key={form.id}>
                <DatePickerComponent />;
              </React.Fragment>
            );
          }

          return (
            <label
              key={form.id}
              className={`w-full border-b-[1px] border-stone-890 ${error && "border-red-400"}`}
              htmlFor={form.input.register}
            >
              <input
                id={form.input.register}
                type={form.input.type}
                autoComplete="off"
                className={`bg-transparent w-full text-white pl-[10px] text-base placeholder:text-base focus-visible:outline-none  h-[35px] ${true && "error"}`}
                {...(regParams &&
                  register(regParams, {
                    required: form.input.required,
                    pattern: {
                      value: form.input.validate,
                      message: form.input.message,
                    },
                  }))}
                placeholder={form.label.text}
              />
              {regParams && errors[regParams] && (
                <span className="text-[12px] text-red-400">
                  {`${error?.message}`}
                </span>
              )}
            </label>
          );
        }
        reset();
        return null;
      })}
      <AccentButton
        props={{
          disabled: errors && Object.keys(errors).length > 0,
          className: "disabled:bg-transparent disabled:cursor-not-allowed",
        }}
        text="Сохранить"
      />
    </form>
  );
}
