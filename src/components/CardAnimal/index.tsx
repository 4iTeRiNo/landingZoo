import { infoPetKey } from "@/shared/constant";
import { FormValues } from "@/shared/types";
import Title from "../TitleAccent";

const CardAnimal = ({ dataPet }: { dataPet: FormValues }) => {
  const infoPet = Object.keys(dataPet).map((key) => {
    return ["namePet", "breed", "age", "gender", "weight", "features"]
      .filter((item) => item === key)
      .map((value) => {
        const dataValue = dataPet[value as keyof typeof dataPet];
        if (value === "age") {
          return (
            <p
              key={1}
              className="flex flex-row w-full items-center text-greyText text-sm border-b-[1px] border-borderColor pb-[15px] h-[44px]"
            >
              {infoPetKey.get(value)}:
              <span className="text-white pl-2">{`${dataValue} лет`}</span>
            </p>
          );
        }
        if (value === "weight") {
          return (
            <p
              key={1}
              className="flex flex-row w-full items-center text-greyText text-sm border-b-[1px] border-borderColor pb-[15px] h-[44px]"
            >
              {infoPetKey.get(value)}:
              <span className="text-white pl-2">{`${dataValue} кг`}</span>
            </p>
          );
        }
        return (
          <p
            key={1}
            className="flex flex-row w-full items-center text-greyText text-sm border-b-[1px] border-borderColor pb-[15px] h-[44px]"
          >
            {infoPetKey.get(value)}:
            <span className="text-white pl-2">{dataValue}</span>
          </p>
        );
      });
  });

  const infoWorkUser = Object.keys(dataPet).map((key) => {
    return ["days", "timeStart", "tel"]
      .filter((item) => item === key)
      .map((value) => {
        if (value === "timeStart" || value === "timeEnd") {
          return (
            <p key={1} className="text-greyText  text-sm">
              {infoPetKey.get("time")}:
              <span className="text-white pl-2">
                {`${dataPet.time_start} - ${dataPet.time_end}`}
              </span>
            </p>
          );
        }
        return (
          <p key={1} className="text-greyText  text-sm">
            {infoPetKey.get(value)}:
            <span className="text-white pl-2">
              {dataPet[value as keyof typeof dataPet]}
            </span>
          </p>
        );
      });
  });

  return (
    <section className="flex flex-col gap-y-10">
      <section>{infoPet}</section>
      <section className="w-full h-fit flex flex-col gap-y-4 rounded-md bg-bgStone750 px-3 py-3">
        <Title className="text-white" text="Дни и часы работы" />
        {infoWorkUser}
      </section>
    </section>
  );
};

export default CardAnimal;
