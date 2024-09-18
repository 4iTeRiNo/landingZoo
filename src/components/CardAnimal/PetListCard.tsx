"use client";

import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PetList } from "@/shared/types";
import { useCounterStore } from "../providers";
import CustomCheckboxItem from "./CustomCheckboxItem";

const PetListCard = ({
  pet,
  groupSelected,
  setGroupSelected,
}: {
  pet: PetList;
  groupSelected: string[];
  setGroupSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const route = useRouter();

  const { isDeleteFlag } = useCounterStore((store) => store);
  const handleClick = (id: string) => {
    route.push(`/animal-card/${id}`);
  };

  return (
    <Card
      isPressable={!isDeleteFlag}
      onPress={() => handleClick(pet.id)}
      className="flex relative z-0 w-[48%] bg-bgStone750 text-white"
      key={pet.id}
    >
      <CustomCheckboxItem
        groupSelected={groupSelected}
        setGroupSelected={setGroupSelected}
        id={pet.id}
      />
      <CardHeader className="p-0">
        <Image
          src={pet.file[0]}
          alt="image"
          width={380}
          className="object-contain rounded-lg"
        />
      </CardHeader>
      <CardBody>
        <p>{pet.name}</p>
        <div className="flex flex-nowrap gap-x-1 items-center">
          <small className="text-greyText">Порода: </small> <p>{pet.breed}</p>
        </div>
        <div className=" flex flex-nowrap gap-x-1 items-center">
          <small className="text-greyText">Возвраст: </small> <p>{pet.age}</p>
        </div>
        <p className="text-pretty">{pet.features}</p>
      </CardBody>
    </Card>
  );
};

export default PetListCard;
