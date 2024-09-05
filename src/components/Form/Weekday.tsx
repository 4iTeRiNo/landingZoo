import { days } from "@/shared/mock";
import { FormValues, Weekday } from "@/shared/types";
import { CheckboxGroup } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import CustomCheckbox from "./CustomCheckBox";

const Weekdays = ({
  setValue,
  dataDays,
}: {
  setValue: UseFormSetValue<FormValues>;
  dataDays?: Weekday[];
}) => {
  const [groupSelected, setGroupSelected] = useState<string[]>([]);
  useEffect(() => {
    setValue("days", groupSelected.join(","));
    if (!dataDays) return;
    setGroupSelected(dataDays);
  }, [groupSelected, setValue, dataDays]);
  return (
    <CheckboxGroup
      isRequired
      aria-required
      errorMessage="Выберите хотя бы один день недели"
      label="Выберите рабочие дни недели"
      orientation="horizontal"
      classNames={{
        label: "text-greyText",
        base: "w-full gap-3",
      }}
      size="lg"
      value={groupSelected}
      defaultValue={dataDays}
      onChange={setGroupSelected}
    >
      {days.map((day) => (
        <CustomCheckbox key={day.id} value={day.key}>
          {day.key}
        </CustomCheckbox>
      ))}
    </CheckboxGroup>
  );
};

export default Weekdays;
