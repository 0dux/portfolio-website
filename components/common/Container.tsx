import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  //what is React.ComponentProps and its purpose?
  //why are we using "&" here and what does it do generally?
  className?: string;
  children: React.ReactNode; //what is React.ReactNode and some common must know examples like this?
}) {
  return (
    //why do we use cn instead of just using `some random tailwind code ${className}`
    <div
      className={cn("mx-auto px-4 max-w-3xl container", className)}
      {...props} //how does props work here and why was it used here?
    >
      {children}
    </div>
  );
}
