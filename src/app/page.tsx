import AccordionComponent from "@/components/Accordion";
import ButtonAsLink from "@/components/CustomLink";
import SliderFedBack from "@/components/Slider/SliderFedBack";
import Title from "@/components/TitleAccent";
import Video from "@/components/Video/Video";
import { detailsSteps, mockContacts } from "@/shared/mock";
import { LineStepIcon } from "@/shared/svg";

export default function Home() {
  return (
    <main className="bg-bgColor px-[4.2vw] pb-7 flex flex-col gap-y-10 border-b-0">
      <section className="flex w-full pb-8 items-center justify-center  flex-col h-[576px] align-middle object-cover">
        <div className="flex-1 flex flex-col text-white z-[5] font-normal w-full gap-y-[30px] ">
          <li className="text-xs marker:text-accentColor">
            Добро пожаловать мы - ZooRama
          </li>
          <h1 className="font-bold text-4xl  leading-9">
            Ваш надежный партнер по уходу за питомцами
          </h1>
          <p className="text-base leading-6 text-balance">
            Присоединяйтесь к нашему сообществу и управляйте уходом за питомцами
            с легкостью!
          </p>
        </div>
        <div className="absolute w-full h-[667px] z-[2] top-0 bottom-0  bg-black opacity-50" />
        <Video className="absolute top-0 bottom-0 h-[667px] z-0 object-cover aspect-square" />
        <div className="flex w-full items-center flex-col z-5 flex-initial gap-y-4">
          <ButtonAsLink showIcon={false} text="Создать личный кабинет" />
          <p className="text-[12px] text-center z-[7] text-[#808080]">Войти</p>
        </div>
      </section>
      <section className="flex flex-col box-border pt-3 gap-y-4 rounded-md bg-bgStone750  text-white ">
        <section className=" flex flex-col gap-y-4 px-5">
          <Title text="Почему стоит выбрать наше приложение?" />
          <p className="text-lg leading-7 text-balance pb-2">
            Наше приложение упрощает уход за питомцами: безопасная регистрация,
            удобные профили, персональные графики и доступность везде и всегда.
          </p>
        </section>
        <ButtonAsLink
          showIcon
          href="/animal-edit"
          text="В приложение"
          customStyle="rounded-[10px] rounded-t-none"
        />
      </section>
      <section className="flex flex-col  rounded-md gap-y-4 pt-3  text-white">
        <Title className="px-[2.8vw]" text="Как это работает" />
        <section className="gap-y-3 relative items-end  px-[2.8vw]">
          <h4 className="text-lg">Вам нужно</h4>
          <div className="flex flex-row pt-5">
            <span className="flex  relative bottom-[-35px] h-[88.88vw]">
              <LineStepIcon />
            </span>
            <ol className="flex flex-col w-full gap-y-[2.22vw]">
              {detailsSteps.map((step) => (
                <li
                  key={step.id}
                  className=" flex flex-row h-[22.78vw] text-sm bg-bgStone750 items-center 
                gap-x-3 p-4 gap-y-3 leading-6"
                >
                  <step.icon />
                  <p className="flex flex-col gap-x-3 text-stone-650 text-base items-start">
                    [Шаг {step.id}]<span>{step.text} </span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <ButtonAsLink showIcon text="Начать сейчас" />
      </section>
      <SliderFedBack />
      <section className="gap-y-4 flex flex-col text-white">
        <h2 className="text-3xl text-balance leading-9">
          Готовы упростить уход за вашим питомцем?
        </h2>
        <ButtonAsLink showIcon text="Зарегистрирваться сейчас" />
      </section>
      <section className="gap-y-4  flex flex-col text-white bg-bgStone750 py-3 rounded-md px-[10px]">
        <Title text="FAQ" />
        <AccordionComponent />
      </section>
      <section className="gap-y-4 flex flex-col text-white">
        <Title text="Контакты" />
        {mockContacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col gap-y-[5px] border-b-[1px] border-borderColor  pb-4"
          >
            <div className="flex flex-row gap-x-3 items-center">
              <contact.icon />
              <h4 className="text-base font-medium">{contact.title}</h4>
            </div>
            <span className="text-sm leading-6">{contact.contact}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
