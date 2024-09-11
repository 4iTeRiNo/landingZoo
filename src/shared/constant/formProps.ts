import { FormProps, FormRegisterName, SelectOptions } from "../types";
import { validateTextPattern } from "../utils";

enum GenderEnum {
  female = "девочка",
  male = "мальчик",
}

export const FormsCreateAnimal: FormProps[] = [
  {
    id: 1,
    placeholder: "Имя",
    type: "text",
    register_name: FormRegisterName.name,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 2,
    placeholder: "Порода",
    type: "text",
    register_name: FormRegisterName.breed,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 3,
    placeholder: "Возвраст",
    type: "number",
    register_name: FormRegisterName.age,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 4,
    placeholder: "Вес",
    type: "number",
    register_name: FormRegisterName.weight,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 5,
    placeholder: "Особые приметы или аллергии",
    type: "text",
    register_name: FormRegisterName.features,
    validate: validateTextPattern,
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

export const FormCreateUser: FormProps[] = [
  /* {
    id: 1,
    placeholder: "Имя",
    type: "text",
    register_name: FormRegisterName.name,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 2,
    placeholder: "Фамилия",
    type: "text",
    register_name: FormRegisterName.surname,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  }, */
  {
    id: 1,
    placeholder: "Email",
    type: "email",
    register_name: FormRegisterName.tel,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 2,
    placeholder: "Пароль",
    type: "password",
    register_name: FormRegisterName.password,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
  {
    id: 3,
    placeholder: "Повторите пароль",
    type: "password",
    register_name: FormRegisterName.repeat_password,
    validate: validateTextPattern,
    message: "Поле не может быть пустым",
  },
];
