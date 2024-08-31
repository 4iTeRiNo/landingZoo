import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { UseFormSetValue } from "react-hook-form";
import { FormValues } from "../types";

export const convertPhoneNumber = (inp: string) => {
  if (isValidPhoneNumber(inp, "RU")) {
    const phoneNumber = parsePhoneNumber(inp, "RU");
    return phoneNumber.formatNational();
  }
  return inp;
};

export const handleChange = (
  value: Date,
  setValue: UseFormSetValue<FormValues>
) => {
  setValue("date", value.toISOString());
};
