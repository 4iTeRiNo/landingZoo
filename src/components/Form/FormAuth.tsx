/* "use client";

import { FormCreateUser } from "@/shared/constant/formProps";
import { ErrorKeyMessage, FormUserValues, keyUserValues } from "@/shared/types";
import React, { useEffect, useState, useTransition } from "react";
import getUser, { State } from "@/app/actions/actions";
import { useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import CustomButton from "../CustomButton";
import Loader from "../Loader";

function FormComponentAuth() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<FormUserValues>({
    mode: "all",
  });

  const [isShowLoader, setIsShowLoader] = useState<boolean>(false);
  const [isShowResult, setIsShowResult] = useState<ErrorKeyMessage>("loading");
  const [state, formAction] = useFormState<State, FormData>(getUser, null);
  const [isReg, setIsReg] = useState(false);
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
      method="post"
    >
      <span className="flex w-full justify-center">
        {isShowLoader && <Loader isShowResult={isShowResult} />}
      </span>

      {isReg ? (
        FormCreateUser.map((form) => {
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
                  validate:
                    (form.type === "text" && form.validate) || undefined,
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
        })
      ) : (
        <>
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
        </>
      )}

      <CustomButton
        actionType="submit"
        isDisabled={isError}
        className={`${isError && "opacity-50"}`}
        text={isReg ? "Зарегистрироваться" : "Войти"}
      />
      <Link
        onClick={() => setIsReg(!isReg)}
        href="/auth/login"
        className="text-base text-greyText text-center hover:text-white"
      >
        Зарегистрирваться
      </Link>
      {state && JSON.stringify(state)}
      {pending && <span>Loading</span>}
    </form>
  );
}

export default FormComponentAuth;
 */
