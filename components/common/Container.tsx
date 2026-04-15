import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  //intersection combines both the properties, component props div - tells what elements props it can have, increased clarity no necessary to give though just for more typesafety
  className?: string;
  children: React.ReactNode; // used for refering to the child elements.
}) {
  return (
    <div className={cn("mx-auto px-4 max-w-3xl", className)} {...props}>
      {children}
    </div>
  );
}
