"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { MoonIcon } from "./animate-ui/icons/moon";
import { SunIcon } from "./animate-ui/icons/sun";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchThemeTo = currentTheme === "light" ? "dark" : "light";

  return (
    <AnimateIcon asChild animateOnHover>
      <button
        className="p-2 focus:outline-none"
        onClick={() => setTheme(switchThemeTo)}
        aria-label="Toggle theme"
      >
        {!mounted ? (
          <div className="size-4" />
        ) : currentTheme === "light" ? (
          <SunIcon size={16} />
        ) : (
          <MoonIcon size={16} />
        )}
      </button>
    </AnimateIcon>
  );
}
