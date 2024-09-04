import { useState } from "react";
import { Button } from "@nextui-org/react";
import { CheckIcon, WarningIcon } from "@/shared/svg";
import { ErrorKeyMessage } from "@/shared/types";

const Loader = ({ isShowResult }: { isShowResult: ErrorKeyMessage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const messageResult = new Map<ErrorKeyMessage, string>([
    ["success", "Готово"],
    ["error", "Извините произошла ошибка, попробуйте еще раз"],
    ["warning", "Заполните обязательные поля"],
  ]);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <Button
      className="flex fixed z-[11] w-fit top-5 bg-accent-gradient items-center p-3 text-balance text-white rounded animate-loaderDown"
      isLoading={isLoading}
      spinner={
        isLoading && (
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        )
      }
      startContent={
        (!isLoading && isShowResult === "success" && (
          <CheckIcon className="relative top-1" />
        )) ||
        (!isLoading && isShowResult === "error" && (
          <WarningIcon className="relative fill-errorMessage" />
        )) ||
        (!isLoading && isShowResult === "warning" && (
          <WarningIcon className="relative  fill-yellow-500 " />
        ))
      }
    >
      {isLoading ? "Загрузка..." : messageResult.get(isShowResult)}
    </Button>
  );
};

export default Loader;
