import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto px-4 max-w-3xl container", className)}
      {...props}
    >
      {children}
    </div>
  );
}
