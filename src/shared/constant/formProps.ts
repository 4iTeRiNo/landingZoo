import { FormProps, FormRegister, SelectOptions } from "../types";
import patternValue from "./errorWord";

enum GenderEnum {
  female = "девочка",
  male = "мальчик",
}

export const Forms: FormProps[] = [
  {
    id: 1,
    placeholder: "Имя",
    type: "text",
    registerName: FormRegister.name,
    validate: patternValue,
    message: "Поле не может быть пустым",
  },
  {
    id: 2,
    placeholder: "Порода",
    type: "text",
    registerName: FormRegister.breed,
    validate: patternValue,
    message: "Поле не может быть пустым",
  },
  {
    id: 3,
    placeholder: "Возвраст",
    type: "number",
    registerName: FormRegister.age,
    validate: /^([1-9]{1,2}){1}(\.[0-9]{1,2})?$/,
    message: "Поле не может быть пустым",
  },
  {
    id: 4,
    placeholder: "Вес",
    type: "number",
    registerName: FormRegister.weight,
    validate: /^([1-9]{1,2}){1}(\.[0-9]{1,2})?$/,
    message: "Поле не может быть пустым",
  },
  {
    id: 5,
    placeholder: "Особые приметы или аллергии",
    type: "text",
    registerName: FormRegister.features,
    validate: patternValue,
    message: "Поле не может быть пустым",
  },
];

export const Genders: SelectOptions[] = [
  {
    id: 1,
    value: GenderEnum.female,
    label: "Девочка",
  },
  {
    id: 2,
    value: GenderEnum.male,
    label: "Мальчик",
  },
];
