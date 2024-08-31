import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <li
      className={`text-sm leading-6 border-b-[1px] z-20 border-b-borderColor 
        marker:text-accentColor pb-4 ${className}`}
    >
      {text}
    </li>
  );
};

export default Title;
