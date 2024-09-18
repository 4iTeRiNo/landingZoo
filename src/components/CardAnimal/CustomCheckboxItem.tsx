import React from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { useCounterStore } from "../providers";

const CustomCheckboxItem = ({
  groupSelected,
  setGroupSelected,
  id,
}: {
  id: string;
  groupSelected: string[];
  setGroupSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const { isDeleteFlag } = useCounterStore((store) => store);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isDeleteFlag && (
        <CheckboxGroup
          value={groupSelected}
          onChange={setGroupSelected}
          className="absolute w-full items-end h-full top-2 right-0 z-20"
        >
          <Checkbox value={id} className="top-2 w-full h-full z-10" />
        </CheckboxGroup>
      )}
    </>
  );
};

export default CustomCheckboxItem;
