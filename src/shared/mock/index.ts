import {
  FacebookIcon,
  XTwitterICon,
  InstagramIcon,
  MessageICon,
  LocationICon,
  CallICon,
  PhoneIcon,
  RegistrationIcon,
  PuppyIcon,
  CLockIcon,
  HomeIcon,
  PeopleIcon,
  ContactsIcon,
  SettingIcon,
  PaintIcon,
} from "@/shared/svg";
import { Comments, Contacts, Faqs, InfoPets, Day } from "../types";

export const InfoPet: InfoPets[] = [
  {
    id: 1,
    pet_info: {
      name: "Pitty",
      breed: "Husky",
      age: "15",
      gender: "Мальчик",
      weight: "59",
      features: "Крассивая",
      tel: "+7 (999) 999-99-99",
      days: "Пн, Вт, Ср, Чт, Пт, Сб, Вс",
      time_start: "10:00",
      time_end: "20:00",
      file: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    user_info: {
      id: 1,
      name: "Марина",
      role: "Администратор",
      email: "u3c5Z@example.com",
      tel: "+7 (999) 999-99-99",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      description:
        "Мой кот Барсик — настоящая гордость моего питомника. Он обладатель нескольких титулов и чемпионатов, и я всегда стремлюсь обеспечить ему лучший уход. Благодаря приложению, я могу легко найти нужного ветеринара или грумера для Барсика. Удобный интерфейс и возможность быстро записаться на прием делают жизнь проще, а мой кот всегда получает самое лучшее!",
    },
  },
];

export const days: Day[] = [
  {
    id: 1,
    key: "Пн",
  },
  {
    id: 2,
    key: "Вт",
  },
  { id: 3, key: "Ср" },
  {
    id: 4,
    key: "Чт",
  },
  {
    id: 5,
    key: "Пт",
  },
  {
    id: 6,
    key: "Сб",
  },
  {
    id: 7,
    key: "Вс",
  },
];

export const mockContacts: Contacts = [
  { id: 1, title: "Email", icon: MessageICon, contact: "info@yourapp.com" },
  {
    id: 2,
    title: "Телефон",
    icon: CallICon,
    contact: "+7 (999) 999-99-99",
  },
  {
    id: 3,
    title: "Адрес",
    icon: LocationICon,
    contact: "г. Москва, ул. Ленина 1",
  },
];

export const mockComments: Comments = [
  {
    id: 1,
    name: "Иван",
    subtitle: "Владелец ветклиники",
    comment:
      "Благодаря этому приложению мои клиенты теперь всегда вовремя приводят своих питомцев на приём. Это улучшило наше взаимодействие и повысило доверие к нашей клинике",
  },
  {
    id: 2,
    name: "Алексей",
    subtitle: "владелец сети гостиниц для животных",
    comment:
      "Приложение помогло мне автоматизировать бронирование и уход за животными. Клиенты довольны, а мой бизнес работает эффективнее",
  },
];

export const mockFaqs: Faqs = [
  {
    id: 1,
    title: "Как зарегистрироваться в приложении?",
    content:
      "Для регистрации скачайте приложение, выберите «Создать аккаунт», введите ваши данные и следуйте инструкциям на экране.",
  },
  {
    id: 2,
    title: "Могу ли я получить поддержку через приложение?",
    content:
      "Для регистрации скачайте приложение, выберите «Создать аккаунт», введите ваши данные и следуйте инструкциям на экране.",
  },
  {
    id: 3,
    title: "Могу ли я добавить несколько питомцев?",
    content:
      "Для регистрации скачайте приложение, выберите «Создать аккаунт», введите ваши данные и следуйте инструкциям на экране.",
  },
];

export const navigateLinks = [
  {
    id: 1,
    text: "Главная",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    text: "О нас",
    href: "/about",
    icon: PeopleIcon,
  },
  {
    id: 3,
    text: "Функции",
    href: "/functions",
    icon: SettingIcon,
  },
  {
    id: 4,
    text: "Отзывы",
    href: "/feedback",
    icon: PaintIcon,
  },
  {
    id: 5,
    text: "Контакты",
    href: "/contacts",
    icon: ContactsIcon,
  },
];

export const mockSocial = [
  { id: 1, text: "twitter icon", image: XTwitterICon, href: "#" },
  { id: 2, text: "facebook icon", image: FacebookIcon, href: "#" },
  { id: 3, text: "instagram icon", image: InstagramIcon, href: "#" },
];

export const detailsSteps = [
  { id: 1, text: "Перейти в приложение", href: "#", icon: PhoneIcon },
  { id: 2, text: "Зарегистрироваться", href: "#", icon: RegistrationIcon },
  { id: 3, text: "Добавить животное", href: "#", icon: PuppyIcon },
  { id: 4, text: "Добавить время работы", href: "#", icon: CLockIcon },
];
