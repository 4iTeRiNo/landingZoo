import { FormProps, FormRegister, SelectOptions } from "../types";
import { validateValuePattern } from "../utils";
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
    register_name: FormRegister.name,
    validate: validateValuePattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 2,
    placeholder: "Порода",
    type: "text",
    register_name: FormRegister.breed,
    validate: validateValuePattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 3,
    placeholder: "Возвраст",
    type: "number",
    register_name: FormRegister.age,
    validate: validateValuePattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 4,
    placeholder: "Вес",
    type: "number",
    register_name: FormRegister.weight,
    validate: validateValuePattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 5,
    placeholder: "Особые приметы или аллергии",
    type: "text",
    register_name: FormRegister.features,
    validate: validateValuePattern,
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

export const patternValueOfNumber = /^(8|\+7) \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
