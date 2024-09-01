import { days } from "@/shared/constant";
import { FormValues } from "@/shared/types";
import { CheckboxGroup } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import CustomCheckbox from "./CustomCheckBox";

const Weekdays = ({ setValue }: { setValue: UseFormSetValue<FormValues> }) => {
  const [groupSelected, setGroupSelected] = useState<string[]>([]);
  useEffect(() => {
    setValue("days", groupSelected.join(","));
  }, [groupSelected, setValue]);
  return (
    <CheckboxGroup
      label="Выберите рабочие дни недели"
      orientation="horizontal"
      classNames={{
        label: "text-greyText",
        base: "w-full gap-3",
      }}
      size="lg"
      value={groupSelected}
      onChange={setGroupSelected}
    >
      {days.map((day) => (
        <CustomCheckbox key={day.id} value={day.key}>
          {day.label}
        </CustomCheckbox>
      ))}
    </CheckboxGroup>
  );
};

export default Weekdays;
