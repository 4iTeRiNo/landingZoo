"use client";

import { RadioGroup } from "@nextui-org/react";
import { CustomRadio } from "@/components/CustomRadioButton/CustomRadioButton";

interface RadioProps {
  selectProps: string;
  setSelect: (value: string) => void;
}

const FilterCheckBox = ({ selectProps, setSelect }: RadioProps) => {
  return (
    <RadioGroup
      orientation="horizontal"
      value={selectProps}
      onValueChange={setSelect}
    >
      <CustomRadio description="Все животные" value="all" />
      <CustomRadio description="Проданные" value="sale" />
      <CustomRadio description="Не проданные" value="notSale" />
    </RadioGroup>
  );
};

export default FilterCheckBox;
