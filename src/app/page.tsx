import AccentButton from "@/components/ButtonAccent";
import Header from "@/components/Header";
import Title from "@/components/TitleAccent";
import Video from "@/components/Video/Video";
import {
  detailsSteps,
  mockComments,
  mockContacts,
  mockFaqs,
} from "@/shared/constant";
import Image from "next/image";
import Link from "next/link";

const happyCat = "happy-cat.svg";

export default function Home() {
  return (
    <main className="bg-indigo-950 px-[4.2vw] pb-7 flex flex-col gap-y-10 border-b-0">
      <section className="flex w-full pb-8 items-center justify-center  flex-col h-[576px] align-middle object-cover">
        <div className="flex-1 flex flex-col text-white z-[5] font-normal w-full gap-y-[30px] ">
          <li className="text-xs marker:text-orange-700">
            Добро пожаловать мы - ZooRama
          </li>
          <h1 className="font-bold text-4xl  leading-9">
            Ваш надежный партнер по уходу за питомцами
          </h1>
          <p className="text-base leading-6 text-balance">
            Присоединяйтесь к нашему сообществу и управляйте уходом за питомцами
            легкостью!
          </p>
        </div>
        <div className="absolute w-full h-[667px] z-[2] top-0 bottom-0  bg-black opacity-50">
          {" "}
        </div>
        <Video className="absolute top-0 bottom-0 h-[667px] z-0 object-cover aspect-square" />
        <div className="flex w-full items-center flex-col z-5 flex-initial gap-y-4">
          <Link
            href="/animal"
            className="z-[7] flex flex-row gap-x-[3.2vw] items-center w-full justify-center rounded-md border border-transparent bg-green-750 
      px-8 py-3 text-base font-medium text-white hover:bg-green-700 disabled:transparent
     focus:ring-2 hover:text-white hover:decoration-transparent 
     active:decoration-transparent focus:ring-green-500 focus:ring-offset-2 active:text-white"
          >
            Зарегистрироваться
          </Link>
          <p className="text-[12px] text-center z-[7] text-[#808080]">Войти</p>
        </div>
      </section>
      <section className="flex flex-col gap-y-4  text-white ">
        <Title text="Почему стоит выбрать наше приложение?" />
        <p className="text-lg leading-6 text-balance pb-2">
          Наше приложение упрощает уход за питомцами: безопасная регистрация,
          удобные профили, персональные графики и доступность везде и всегда.
        </p>
        <div className="flex flex-col justify-center items-center w-full">
          <Image
            className="aspect-square"
            width={228}
            height={228}
            src={happyCat}
            alt="Happy_cat"
          />
          <AccentButton isIcon text="В приложение" />
        </div>
      </section>
      <section className="flex flex-col gap-y-4 pt-3 bg-stone-850 text-white">
        <Title className="px-[2.8vw]" text="Как это работает" />
        <section className="rounded-md gap-y-3  px-[2.8vw]">
          <h4 className="text-lg">Вам нужно</h4>
          <ol className="flex flex-col gap-y-[3.9vw]">
            {detailsSteps.map((step) => (
              <li key={step.id} className="text-sm leading-6">
                <span className="text-stone-650 text-sm">
                  [Шаг - {step.id}]
                </span>{" "}
                - {step.text}
              </li>
            ))}
          </ol>
        </section>
        <AccentButton isIcon text="Начать сейчас" />
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <Title text="Отзывы" />
        {mockComments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-y-[1.4vw]">
            <h4 className="text-base font-medium">{comment.name}</h4>
            <span className="text-xs leading-6 text-stone-550">
              {comment.subtitle}
            </span>
            <p className="text-sm">{comment.comment}</p>
          </div>
        ))}
      </section>
      <section className="gap-y-4 flex flex-col text-white bg-stone-850 py-3 rounded-md px-[10px]">
        <Title text="FAQ" />
        {mockFaqs.map((faq) => (
          <details key={faq.id}>
            <summary className="text-base font-medium pb-[2.5vw]">
              {faq.title}
            </summary>
            <p className="text-sm leading-6">{faq.content}</p>
          </details>
        ))}
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <h2 className="text-3xl text-balance leading-9">
          Готовы упростить уход за вашим питомцем?
        </h2>
        <AccentButton isIcon text="Зарегистрироваться сейчас" />
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <Title text="Контакты" />
        {mockContacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col gap-y-[5px] border-b-[1px] border-stone-750  pb-4"
          >
            <h4 className="text-base font-medium">{contact.title}</h4>
            <span className="text-sm leading-6">{contact.contact}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
