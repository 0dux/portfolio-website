"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

import type { LottieRefCurrentProps } from "lottie-react";

// Lazy-load lottie-react to avoid 119 KiB in the initial bundle
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

interface LottieIconProps {
  className?: string;
  animationData: object;
}

const LottieIcon = ({ className, animationData }: LottieIconProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const groupParent = containerRef.current?.closest(".group");
    if (!groupParent) return;

    const handleEnter = () => lottieRef.current?.play();
    const handleLeave = () => lottieRef.current?.stop();

    groupParent.addEventListener("mouseenter", handleEnter);
    groupParent.addEventListener("mouseleave", handleLeave);

    return () => {
      groupParent.removeEventListener("mouseenter", handleEnter);
      groupParent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("dark:invert", className)}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieIcon;
