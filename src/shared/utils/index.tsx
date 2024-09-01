import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { UseFormSetValue } from "react-hook-form";
import { FormValues } from "../types";

const convertPhoneNumber = (inp: string) => {
  if (isValidPhoneNumber(inp, "RU")) {
    const phoneNumber = parsePhoneNumber(inp, "RU");
    return phoneNumber.formatNational();
  }
  return inp;
};

export default convertPhoneNumber;
