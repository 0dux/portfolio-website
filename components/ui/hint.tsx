"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface HintProps {
  label: string;
  children: React.ReactNode;
  shortcut?: string;
  side?: "top" | "bottom";
  className?: string;
}

export const Hint = ({
  label,
  children,
  shortcut,
  side = "top",
  className,
}: HintProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center h-fit w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: side === "top" ? 5 : -5,
              x: "-50%",
            }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: side === "top" ? 5 : -5,
              x: "-50%",
            }}
            transition={{ duration: 0.12, ease: [0.23, 1, 0.32, 1] }} // var(--ease-out)
            style={{ 
              transformOrigin: side === "top" ? "bottom center" : "top center" 
            }}
            className={cn(
              "absolute left-1/2 z-50 whitespace-nowrap px-3 py-1.5 rounded-xl text-[11px] font-medium shadow-md pointer-events-none",
              "bg-foreground text-background",
              side === "top" ? "bottom-full mb-3" : "top-full mt-3",
              className,
            )}
          >
            <div className="flex items-center gap-2">
              <span className="tracking-tight">{label}</span>
              {shortcut && (
                <span className="text-[9px] text-background/60 bg-background/20 px-1.5 py-0.5 rounded-md font-mono border border-background/10">
                  {shortcut}
                </span>
              )}
            </div>

            {/* Triangle Pointer */}
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 -z-10",
                "bg-foreground",
                side === "top" ? "-bottom-1" : "-top-1",
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
