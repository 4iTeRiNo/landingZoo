"use client";

import { FormCreateUser } from "@/shared/constant/formProps";
import { ErrorKeyMessage, FormUserValues, keyUserValues } from "@/shared/types";
import React, { useEffect, useState, useTransition } from "react";
import getUser, { State } from "@/app/actions/actions";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

function FormComponentSignIn() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<FormUserValues>({
    mode: "all",
  });

  const [state, formAction] = useFormState<State, FormData>(getUser, null);
  const [pending, startTransaction] = useTransition();

  const isError = Object.keys(errors).length > 0;

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === "success") {
      console.log(state.message);
    }
    reset();
  }, [handleSubmit, reset, state]);

  return (
    <form
      action={(formData) => startTransaction(() => formAction(formData))}
      className="flex flex-col w-full justify-center bg-bgColor  gap-y-6"
    >
      {FormCreateUser.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.register_name}
            className={`w-full  leading-6 
              ${errors[form.register_name as keyUserValues] ? "border-red-400" : "border-accentColor"}`}
          >
            <input
              {...register(form.register_name as keyUserValues, {
                required: form.message,
                validate: (form.type === "text" && form.validate) || undefined,
              })}
              id={form.register_name}
              autoComplete="off"
              placeholder={form.placeholder}
              type={form.type}
              className="flex w-full text-white py-2 border-accentColor border-1 rounded 
                  grow-0 flex-shrink bg-transparent px-2"
            />
            {errors[form.register_name as keyUserValues] && (
              <span className="text-[12px] text-errorMessage">
                {`${errors[form.register_name as keyUserValues]?.message}` ||
                  "Введите корректные данные"}
              </span>
            )}
          </label>
        );
      })}

      <CustomButton
        actionType="submit"
        isDisabled={isError}
        isLoading={pending}
        className={`${isError && "opacity-50"}`}
        text={pending ? "Секундочку" : "Зарегистрироваться"}
      />
      <Link
        href="/auth/login"
        className="text-base text-greyText text-center hover:text-white"
      >
        Войти
      </Link>
    </form>
  );
}

export default FormComponentSignIn;
