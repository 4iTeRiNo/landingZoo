import UserInfo from "./User";
import Title from "../TitleAccent";

const Pet = {
  name: "Pitty",
  breed: "Husky",
  age: "15 лет",
  gender: "Девочка",
  weight: "59кг",
  feature: "Крассивая",
  date: "10.10.2022",
  time: "10:00",
};

const infoPetKey = new Map([
  ["name", "Имя"],
  ["breed", "Порода"],
  ["age", "Возраст"],
  ["gender", "Пол"],
  ["weight", "Вес"],
  ["feature", "Особенности"],
  ["date", "Дата"],
  ["time", "Время"],
]);
const CardAnimal = () => {
  const infoPet = Object.keys(Pet).map((key) => {
    return ["name", "breed", "age", "gender", "weight", "feature"]
      .filter((item) => item === key)
      .map((value, index) => (
        <p
          key={index}
          className="flex flex-row w-full items-center text-stone-550 text-sm border-b-[1px] pb-[15px] h-[44px]"
        >
          {infoPetKey.get(value)}:
          <span className="text-white pl-2">
            {Pet[value as keyof typeof Pet]}
          </span>
        </p>
      ));
  });

  const infoWorkUser = Object.keys(Pet).map((key) => {
    return ["date", "time"]
      .filter((item) => item === key)
      .map((value, index) => (
        <p key={index} className="text-stone-550  text-sm">
          {infoPetKey.get(value)}:
          <span className="text-white pl-2">
            {Pet[value as keyof typeof Pet]}
          </span>
        </p>
      ));
  });
  return (
    <section className="flex flex-col gap-y-10">
      <section className="pt-4">
        <UserInfo />
      </section>
      <section>{infoPet}</section>
      <section className="w-full h-fit flex flex-col gap-y-4 rounded-md bg-stone-850 px-3 py-3">
        <Title className="text-white" text="Дата и часы работы" />
        {infoWorkUser}
      </section>
    </section>
  );
};

export default CardAnimal;
