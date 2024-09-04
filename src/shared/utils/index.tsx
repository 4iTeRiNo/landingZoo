import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

const convertPhoneNumber = (inp: string) => {
  if (isValidPhoneNumber(inp, "RU")) {
    const phoneNumber = parsePhoneNumber(inp, "RU");
    return phoneNumber.formatNational();
  }
  return inp;
};

export default convertPhoneNumber;
