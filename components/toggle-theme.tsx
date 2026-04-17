"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchThemeTo = currentTheme === "light" ? "dark" : "light";

  return (
    <button
      className="p-2 focus:outline-none"
      onClick={() => setTheme(switchThemeTo)}
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <div className="size-4" />
      ) : currentTheme === "light" ? (
        <SunIcon
          className="hover:rotate-180 transition-transform duration-500"
          size={16}
        />
      ) : (
        <MoonIcon
          className="hover:rotate-180 transition-transform duration-500"
          size={16}
        />
      )}
    </button>
  );
}
