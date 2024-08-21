import { text } from "stream/consumers";
import { Comments, Contacts, Faqs } from "../types";

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

export const mockContacts: Contacts = [
  { id: 1, title: "Email", contact: "info@yourapp.com" },
  {
    id: 2,
    title: "Телефон",
    contact: "+7 (999) 999-99-99",
  },
  {
    id: 3,
    title: "Адрес",
    contact: "г. Москва, ул. Ленина 1",
  },
];

export const navigateLinks = [
  {
    id: 1,
    text: "Главная",
    link: "/",
  },
  {
    id: 2,
    text: "О нас",
    link: "/about",
  },
  {
    id: 3,
    text: "Функции",
    link: "/functions",
  },
  {
    id: 4,
    text: "Отзывы",
    link: "/feedback",
  },
  {
    id: 5,
    text: "Констакты",
    link: "/contacts",
  },
  {
    id: 6,
    text: "Зарегистрироваться",
    link: "/registration",
  },
];

export const mockSocial = [
  { id: 1, text: "twitter icon", image: "/x-twitter.svg" },
  { id: 2, text: "facebook icon", image: "/facebook.svg" },
  { id: 3, text: "instagram icon", image: "/instagram_dark.svg" },
];

export const detailsSteps = [
  { id: 1, text: "Перейти в приложение" },
  { id: 2, text: "Зарегистрироваться" },
  { id: 3, text: "Добавить животное" },
  { id: 4, text: "Добавить время работы" },
];
