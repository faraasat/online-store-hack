"use client";

import { useTheme } from "next-themes";

import { HiMoon, HiSun } from "react-icons/hi";

const NavbarTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (themeType: "dark" | "light") => {
    setTheme(themeType);
  };

  return (
    <div className="flex items-center justify-center rounded-full text-[color:var(--primary-1)]">
      {theme === "dark" ? (
        <HiSun
          title="light"
          className="text-[32px]"
          onClick={() => handleChangeTheme("light")}
        />
      ) : (
        <HiMoon
          title="dark"
          className="text-[32px]"
          onClick={() => handleChangeTheme("dark")}
        />
      )}
    </div>
  );
};

export default NavbarTheme;
