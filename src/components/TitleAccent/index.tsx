import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <li className="text-[13px] border-b-[1px] border-stone-750 marker:text-green-600 pb-4">
      {text}
    </li>
  );
};

export default Title;
