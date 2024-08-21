"use client";

import { useEffect, useState } from "react";

const Toggle = ({ className }: { className?: string }) => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<"Бизнес" | "Клиент">("Бизнес");
  useEffect(() => {
    return toggleTheme ? setTheme("Бизнес") : setTheme("Клиент");
  }, [toggleTheme]);

  return (
    <div className={`toggle_wrapper text-white ${className}`}>
      <label
        htmlFor="toggle-button"
        className="flex flex-row gap-x-2 items-center"
      >
        <span>{theme}</span>
        <input
          onClick={() => setToggleTheme(!toggleTheme)}
          type="checkbox"
          id="toggle-button"
          className="toggle_button"
        />
      </label>
    </div>
  );
};

export default Toggle;
