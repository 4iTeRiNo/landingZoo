import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <li
      className={`text-xs leading-6 border-b-[1px] border-stone-750 marker:text-green-600 pb-4
        ${className}`}
    >
      {text}
    </li>
  );
};

export default Title;
