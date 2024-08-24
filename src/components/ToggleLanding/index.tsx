"use client";

import { useEffect, useState } from "react";

const Toggle = ({ className }: { className?: string }) => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<"Бизнес" | "Клиент">("Бизнес");
  useEffect(() => {
    return toggleTheme ? setTheme("Бизнес") : setTheme("Клиент");
  }, [toggleTheme]);

  return (
    <div className={`toggle_wrapper text-white  ${className}`}>
      <label
        htmlFor="toggle-button"
        className="flex flex-row gap-x-[2.22vw] text-white items-center"
      >
        <span className="text-sm">{theme}</span>
        <input
          onClick={() => setToggleTheme(!toggleTheme)}
          type="checkbox"
          className="toggle_button border-white"
        />
      </label>
    </div>
  );
};

export default Toggle;
