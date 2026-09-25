"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      variant="rectangle"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      className="flex size-6 cursor-pointer items-center justify-center rounded-md transition-transform duration-150 ease-out active:scale-90 [&_svg]:size-4"
      aria-label="Toggle theme"
    />
  );
}
