import AccentButton from "@/components/ButtonAccent";
import Title from "@/components/TitleAccent";
import Video from "@/components/Video";
import {
  mockComments,
  mockContacts,
  mockFaqs,
  mockSocial,
  navigateLinks,
} from "@/shared/constant";
import Image from "next/image";

const happyCat = "happy-cat.svg";

// eslint-disable-next-line lines-around-directive
export default function Home() {
  return (
    <main className="bg-stone-950 pl-4  pb-7  pr-4 flex flex-col gap-y-10">
      <section className="flex w-full g pt-6 pb-8 items-center  flex-col h-[667px] align-middle  justify-center object-cover, pos=relative ">
        <div className="flex-none flex flex-row justify-between w-80 z-10 pb-9">
          <Image
            className=""
            src="logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <div>
            <Image src="hamburger.svg" alt="hamburger" width={35} height={35} />
          </div>
        </div>
        <div className="flex-1 flex   flex-col text-white z-10 font-normal top-28 w-80 gap-y-7 ">
          <li className="text-[13px] marker:text-orange-700">
            Добро пожаловать мы - Find Friend
          </li>
          <h1 className="font-bold text-4xl text  leading-8">
            Ваш надежный партнер по уходу за питомцами
          </h1>
          <p className="text-[16px] text-balance">
            Присоединяйтесь к нашему сообществу и управляйте уходом за питомцами
            легкостью!
          </p>
        </div>
        <div className="absolute w-full h-[667px] z-[2] top-0 bottom-0  bg-black opacity-50">
          {" "}
        </div>
        <Video className="absolute top-0 bottom-0 h-[667px] z-0 object-cover aspect-square" />
        <div className="flex items-center flex-col z-10 flex-initial gap-y-4">
          <AccentButton text=" Создать личный кабинет" />
          <p className="text-[12px] text-center text-white">Войти</p>
        </div>
      </section>
      <section className="flex flex-col gap-y-4  text-white ">
        <Title text="Добро пожаловать мы - Find Friend" />
        <p className="text-[18px] text-balance leading-normal pb-2">
          Наше приложение упрощает уход за питомцами: безопасная регистрация,
          удобные профили, персональные графики и доступность везде и всегда.
        </p>
        <div>
          <Image
            className="m-auto aspect-square"
            width={228}
            height={228}
            src={happyCat}
            alt="Happy_cat"
          />
          <AccentButton text="В приложение" />
        </div>
      </section>
      <section className="flex flex-col gap-y-4 pt-3 px-[10px] bg-stone-850  text-white">
        <Title text="Как это работает" />
        <section className=" pb-5 ">
          <h4 className="text-[18px]">Вам нужно</h4>
          <ol className="pl-[64px] list leading-loose">
            <li className="">- Перейти в приложение</li>
            <li>- Зарегистрироваться</li>
            <li>- Добавить животное</li>
            <li>- Добавить время работы</li>
          </ol>
        </section>
        <AccentButton text="Начать сейчас" />
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <Title text="Отзывы" />
        {mockComments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-y-[5px]">
            <h4 className="text-[16px] font-medium">{comment.name}</h4>
            <span className="text-[12px] text-stone-550">
              {comment.subtitle}
            </span>
            <p className="text-[12px] ">{comment.comment}</p>
          </div>
        ))}
      </section>
      <section className="gap-y-4 flex flex-col text-white bg-stone-850 pt-3 px-[10px]">
        <Title text="FAQ" />
        {mockFaqs.map((faq) => (
          <details key={faq.id}>
            <summary>
              {faq.title}{" "}
              <Image
                width={12}
                height={9}
                className="aspect-square"
                src="/arrow-faq.svg"
                alt="arrow"
              />{" "}
            </summary>
            <p>{faq.content}</p>
          </details>
        ))}
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <h2 className="text-[29px] text-balance">
          Готовы упростить уход за вашим питомцем?
        </h2>
        <AccentButton text="Зарегистрироваться сейчас" />
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <Title text="Контакты" />
        {mockContacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col gap-y-[5px] border-b-[1px] border-stone-750  pb-4"
          >
            <h4>{contact.title}</h4>
            <span>{contact.contact}</span>
          </div>
        ))}
      </section>
      <section>
        <ul className="flex flex-row flex-wrap text-white gap-x-5 gap-y-5  justify-center list-disc first:marker:text-transparent">
          {navigateLinks.map((link) => (
            <li
              key={link.id}
              className="text-[12px] leading-[140%] text-nowrap marker:text-green-600  pr-5 target:marker:text-transparent"
            >
              {link.text}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-row justify-between px-[10px] pt-5  border-t-[1px] border-stone-750">
        <div className="flex flex-col gap-y-3">
          <h4 className="text-[11px] text-stone-750">
            Политика конфиденциальности
          </h4>
          <h4 className="text-[11px] text-stone-750">Условия использования</h4>
        </div>
        <div className="flex flex-row gap-x-5">
          {mockSocial.map((social) => (
            <Image
              key={social.id}
              width={20}
              height={20}
              className="aspect-square"
              src={social.image}
              alt={social.text}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
