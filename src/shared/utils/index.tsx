import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import patternValue from "../constant/errorWord";

export const convertPhoneNumber = (inp: string) => {
  if (isValidPhoneNumber(inp, "RU")) {
    const phoneNumber = parsePhoneNumber(inp, "RU");
    return phoneNumber.formatNational();
  }
  return inp;
};

export const validateValuePattern = (str: string): boolean => {
  return patternValue.test(str.toLowerCase());
};
