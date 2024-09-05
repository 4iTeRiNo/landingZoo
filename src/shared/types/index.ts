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
  timeStart: string;
  timeEnd: string;
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
  registerName: Partial<FormRegister>;
  validate: RegExp;
  message: string;
  type: string;
  placeholder: string;
};

export type ErrorKeyMessage =
  | "error"
  | "success"
  | "warning"
  | "info"
  | "loading";
