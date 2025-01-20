"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const defaultTheme = storedTheme
      ? storedTheme
      : prefersDarkMode
      ? "dark"
      : "light";

    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChamgeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleChamgeTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-all"
    >
      {theme === "dark" ? (
        <MoonIcon className="h-6 w-6 text-black dark:text-white" />
      ) : (
        <SunIcon className="h-6 w-6 text-black dark:text-white" />
      )}
    </button>
  );
};

export default ToggleThemeButton;
