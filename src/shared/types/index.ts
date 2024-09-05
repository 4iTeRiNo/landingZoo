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

export type key = keyof FormValues;

export type FormValues = {
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
};

export enum FormRegister {
  name = "name",
  breed = "breed",
  age = "age",
  gender = "gender",
  weight = "weight",
  features = "features",
  tel = "tel",
}

export type FormProps = {
  id: number;
  register_name: Partial<FormRegister>;
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

export type User = {
  id: number;
  name: string;
  tel: string;
  role: string;
  avatar: string;
  email: string;
  description: string;
};

export type InfoPets = {
  id: number;
  pet_info: FormValues;
  user_info: User;
};
