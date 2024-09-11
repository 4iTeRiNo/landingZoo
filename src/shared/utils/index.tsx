import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import patternText from "../constant/errorWord";
import { patternValuePsw } from "../constant";

export const convertPhoneNumber = (inp: string) => {
  if (isValidPhoneNumber(inp, "RU")) {
    const phoneNumber = parsePhoneNumber(inp, "RU");
    return phoneNumber.formatNational();
  }
  return inp;
};

export const validateTextPattern = (str: string): boolean => {
  return patternText.test(str.toLowerCase());
};

export const validatePswPattern = (str: string): boolean => {
  return patternValuePsw.test(str);
};
