import { FieldErrors } from "react-hook-form";

export type Comments = Comment[];
export type Faqs = Faq[];
export type Contacts = Contact[];

type Comment = {
  id: number;
  name: string;
  comment: string;
  subtitle: string;
};

type Faq = {
  id: number;
  title: string;
  content: string;
};

type Contact = {
  id: number;
  title: string;
  contact: string;
  icon: string;
};

export type SelectOptions = {
  id: number;
  value: string;
  label: string;
};

export type keyAnimalValues = keyof FormAnimalValues;
export type keyUserValues = keyof FormUserValues;

type FormValues = {
  name: string;
  breed: string;
  age: string;
  gender: string;
  weight: string;
  features: string;
  tel: string;
  days: string;
  time_start: string;
  time_end: string;
  file: string;
  surname: string;
  email: string;
  birth_date: string;
  password: string;
  repeat_password: string;
};

export type FormAnimalValues = Omit<
  FormValues,
  "surname" | "email" | "password" | "repeat_password" | "birth_date"
>;

export type FormUserValues = Pick<
  FormValues,
  "email" | "password" | "repeat_password"
>;

export enum FormRegisterName {
  name = "name",
  breed = "breed",
  age = "age",
  gender = "gender",
  weight = "weight",
  features = "features",
  tel = "tel",
  surname = "surname",
  email = "email",
  birth_date = "birth_date",
  password = "password",
  repeat_password = "repeat_password",
}

export type TypeFieldErrors = FieldErrors<FormAnimalValues>;

export type FormProps = {
  id: number;
  register_name: FormRegisterName;
  validate: (str: string) => boolean;
  message: string;
  type: string;
  placeholder: string;
};

export type Weekday = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";

export type Day = {
  id: number;
  key: Weekday;
};

export type ErrorKeyMessage =
  | "error"
  | "success"
  | "warning"
  | "info"
  | "loading";

export type InfoPets = {
  id: number;
  pet_info: FormAnimalValues;
  user_info: User;
};

export type User = {
  id: number;
  name: string;
  tel: string;
  role: string;
  avatar: string;
  email: string;
  description: string;
};

export type TelegramUser = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
  auth_date: number;
  hash: string;
};

export type SingOfSale = "all" | "sale" | "notSale";

export type PetList = {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
  weight: string;
  features: string;
  file: string[];
  sign_of_sale: SingOfSale;
};

export type DataPets = PetList[];
