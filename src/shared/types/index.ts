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
  text: string;
};

export type FieldValues = Record<FormRegister, string>;

export enum FormRegister {
  namePet = "namePet",
  breed = "breed",
  age = "age",
  gender = "gender",
  weight = "weight",
  features = "features",
  phone = "phone",
  date = "date",
}

export type FormValues = {
  id: number;
  label: {
    text: string;
  };
  input: {
    register?: Partial<FormRegister>;
    validate: RegExp;
    required: string;
    message: string;
    type: string;
  };
};
