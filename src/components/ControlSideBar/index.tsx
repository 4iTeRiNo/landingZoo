"use client";

import { ButtonGroup, Button } from "@nextui-org/react";
import { AddPlusIcon, DeleteIcon, FilterIcon } from "@/shared/svg";
import { useRouter } from "next/navigation";
import { useCounterStore } from "../providers";

const ControlSideBar = ({ groupSelected }: { groupSelected: string[] }) => {
  const route = useRouter();
  const { deletePetCard, setIsDeleteFlag, isDeleteFlag } = useCounterStore(
    (store) => store
  );

  const handleClick = () => {
    return route.push("/animal-edit");
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isDeleteFlag ? (
        <section className="sideBar flex w-full z-20 bg-[#2C2C2CE5] items-center flex-col fixed bottom-0 ">
          <ButtonGroup variant="light">
            <Button onPress={() => setIsDeleteFlag()}>
              <DeleteIcon />
            </Button>
            <Button onPress={handleClick}>
              <AddPlusIcon />
            </Button>
            <Button>
              <FilterIcon />
            </Button>
          </ButtonGroup>
        </section>
      ) : (
        <div className="flex w-full px-3 gap-2 flex-col fixed bottom-0">
          <Button
            onPress={() => deletePetCard(groupSelected)}
            variant="solid"
            className="w-full bg-red-700"
          >
            Удалить
          </Button>
          <Button
            onPress={() => setIsDeleteFlag()}
            color="default"
            variant="solid"
          >
            Отмена
          </Button>
        </div>
      )}
    </>
  );
};

export default ControlSideBar;
