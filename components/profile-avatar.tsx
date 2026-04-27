"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Hint } from "./ui/hint";

interface ProfileAvatarProps {
  mainImage: string;
  flipImage: string;
}

export default function ProfileAvatar({
  mainImage,
  flipImage,
}: ProfileAvatarProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return;

    setIsFlipped(true);

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Lazy-load confetti only when needed
    const confetti = (await import("canvas-confetti")).default;

    // Trigger confetti exactly from the avatar's position
    confetti({
      particleCount: 150,
      spread: 70,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
      zIndex: 999,
    });
  };

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(false);
      }, 10000); // 10 seconds duration
      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  return (
    <Hint label="Click me" side="bottom">
      <div
        className="relative ml-2 size-32 -mt-16 cursor-pointer z-10"
        style={{ perspective: "1000px" }}
        onClick={handleClick}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }} // var(--ease-in-out)
        >
          {/* Front Face (Original Image) */}
          <div
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-900 shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={mainImage}
              fill
              loading="eager"
              className="object-cover transition-transform duration-300 ease-out hover:scale-105"
              alt="Profile Image"
              sizes="128px"
            />
          </div>

          {/* Back Face (Flip Image) */}
          <div
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-900 shadow-lg"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={flipImage}
              fill
              loading="eager"
              className="object-cover"
              alt="Flipped Profile Image"
              sizes="128px"
            />
          </div>
        </motion.div>
      </div>
    </Hint>
  );
}
