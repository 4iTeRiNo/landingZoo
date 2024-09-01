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

export const days = [
  {
    id: 1,
    key: "понеделник",
    label: "Пн",
  },
  {
    id: 2,
    key: "вторник",
    label: "Вт",
  },
  { id: 3, key: "среда", label: "Ср" },
  {
    id: 4,
    key: "четверг",
    label: "Чт",
  },
  {
    id: 5,
    key: "пятница",
    label: "Пт",
  },
  {
    id: 6,
    key: "суббота",
    label: "Сб",
  },
  {
    id: 7,
    key: "воскресенье",
    label: "Вс",
  },
];
