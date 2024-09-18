"use client";

import getUser, { State } from "@/app/actions/actions";
import { FormCreateUser } from "@/shared/constant/formProps";
import { ErrorKeyMessage, FormUserValues, keyUserValues } from "@/shared/types";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import TelegramAuthWidget from "@/components/telegramAuth";
import CustomButton from "@/components/CustomButton";

function FormComponentAuth() {
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
      <div className="flex w-full flex-shrink basis-2 ">
        <label htmlFor="name" className="flex text-sm w-full">
          <input
            id="name"
            name="name"
            placeholder="Логин / Email / Телефон"
            className="flex w-full text-white py-2 border-accentColor border-1 rounded 
                grow-0 flex-shrink bg-transparent px-2"
          />{" "}
        </label>
      </div>
      <div>
        <label className="flex text-sm w-full" htmlFor="password">
          <input
            className="flex w-full text-white py-2 border-accentColor border-1 rounded 
                grow-0 flex-shrink bg-transparent px-2"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          />{" "}
        </label>
      </div>

      <CustomButton
        actionType="submit"
        isDisabled={isError}
        className={`${isError && "opacity-50"}`}
        text={pending ? "Секундочку" : "Войти"}
        isLoading={pending}
      />
      <span className="text-center text-white"> или </span>
      <TelegramAuthWidget />
      <Link
        href="/auth/signup"
        className="text-base text-greyText text-center hover:text-white"
      >
        Зарегистрирваться
      </Link>
    </form>
  );
}

export default FormComponentAuth;
