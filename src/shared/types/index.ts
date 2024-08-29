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
};

export type SelectOptions = {
  id: number;
  value: string;
  label: string;
};
export type FormValues = {
  name: string;
  breed: string;
  age: number;
  gender: string;
  weight: string;
  features: string;
  tel: number;
  date: string;
  time: string;
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
