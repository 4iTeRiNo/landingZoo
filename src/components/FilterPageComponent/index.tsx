"use client";

import { useState } from "react";
import PetList from "@/components/Skeleton/PetList";
import PetListCard from "@/components/CardAnimal/PetListCard";
import FilterCheckBox from "@/components/CustomRadioButton";
import { useCounterStore } from "@/components/providers";
import ControlSideBar from "../ControlSideBar";

const FilterPageComponent = () => {
  const [groupSelected, setGroupSelected] = useState<string[]>([]);

  const { dataPets, setSelectSale, singOfSale } = useCounterStore(
    (store) => store
  );
  const isDataPets = dataPets.length !== 0;
  const filterData = dataPets.filter((pet) => {
    return pet.sign_of_sale === singOfSale || singOfSale === "all";
  });

  return (
    <>
      <section className="w-full flex flex-row basis-0 justify-between">
        <FilterCheckBox selectProps={singOfSale} setSelect={setSelectSale} />
      </section>
      <section className="w-full flex flex-wrap gap-2">
        {isDataPets &&
          filterData.map((pet) => (
            <PetListCard
              groupSelected={groupSelected}
              setGroupSelected={setGroupSelected}
              key={pet.id}
              pet={pet}
            />
          ))}
        {!isDataPets && <PetList />}
      </section>
      <ControlSideBar groupSelected={groupSelected} />
    </>
  );
};

export default FilterPageComponent;
