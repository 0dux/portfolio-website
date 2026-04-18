"use client";

import { Hint } from "@/components/ui/hint";
import { MoonIcon, Sun02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    const switchThemeTo = currentTheme === "light" ? "dark" : "light";
    const doc = document as any;
    if (!doc.startViewTransition) {
      setTheme(switchThemeTo);
      return;
    }

    doc.startViewTransition(() => {
      flushSync(() => {
        setTheme(switchThemeTo);
      });
    });
  }, [currentTheme, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "d" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName) &&
        !(e.target as HTMLElement).isContentEditable
      ) {
        handleThemeChange();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleThemeChange]);

  return (
    <Hint label="Toggle Theme" shortcut="D" side="bottom">
      <button
        className="p-2 cursor-pointer focus:outline-none relative group flex items-center justify-center transition-transform active:scale-90 duration-150 ease-out"
        onClick={handleThemeChange}
        aria-label="Toggle theme"
      >
        {!mounted ? (
          <div className="size-4" />
        ) : currentTheme === "light" ? (
          <HugeiconsIcon
            icon={Sun02Icon}
            className="group-hover:rotate-180 transition-transform duration-200 ease-out"
            size={16}
          />
        ) : (
          <HugeiconsIcon
            icon={MoonIcon}
            className="group-hover:rotate-12 transition-transform duration-200 ease-out"
            size={16}
          />
        )}
      </button>
    </Hint>
  );
}
