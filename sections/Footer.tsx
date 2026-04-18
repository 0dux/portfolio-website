"use client";

import { cn } from "@/lib/utils";
import {
  Github01FreeIcons,
  Link01Icon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const social_links = [
  {
    label: "GitHub",
    href: "https://github.com/0dux",
    icon: Github01FreeIcons,
    color: "#24292e",
    image: "/socials/github-profile.png",
  },
  {
    label: "Twitter",
    href: "https://x.com/DXKSH_X",
    icon: NewTwitterIcon,
    color: "#1da1f2",
    image: "/socials/X-profile.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dakshyadav0",
    icon: Linkedin01Icon,
    color: "#0077b5",
    image: "/socials/linkedIn-profile.png",
  },
  {
    label: "Mail",
    href: "mailto:dakshdav@gmail.com",
    icon: Mail01Icon,
    color: "#ea4335",
    fallbackText: "dakshdav@gmail.com",
  },
  {
    label: "Resume",
    href: "/resume",
    icon: Link01Icon,
    color: "#4caf50",
    fallbackText: "View my resume",
  },

];

const CursorFollower = ({ activeLabel }: { activeLabel: string | null }) => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  const activeLink = social_links.find((s) => s.label === activeLabel);

  return (
    <AnimatePresence>
      {activeLabel && activeLink && (
        <motion.div
          style={{
            left: springX,
            top: springY,
            x: "-50%",
            y: "-120%",
            rotate: 2,
          }}
          initial={{ opacity: 0, translateY: 20, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, translateY: 0, scale: 1, rotate: 2 }}
          exit={{ opacity: 0, translateY: 20, scale: 0.8, rotate: -5 }}
          className="fixed pointer-events-none z-50 p-1"
        >
          <div
            className={cn(
              "bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-300",
              activeLink.image ? "w-80 h-auto min-h-25" : "p-2 min-w-max",
            )}
          >
            {activeLink.image ? (
              <div className="relative w-full h-auto flex flex-col">
                <Image
                  src={activeLink.image}
                  alt={activeLabel}
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            ) : (
              <span className="text-sm font-medium text-white tracking-tight whitespace-nowrap">
                {activeLink.fallbackText}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  return (
    <footer className="w-full py-16 flex flex-col gap-12 relative border-t border-border">
      <CursorFollower activeLabel={hoveredLabel} />

      <div className="space-y-4">
        <h2 className="font-serif italic text-4xl tracking-tight text-foreground">
          Let&apos;s connect
        </h2>
        <p className="text-lg font-medium text-muted-foreground tracking-tight transition-opacity duration-300">
          Find me on these platforms
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {social_links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.label !== "Resume" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onMouseEnter={() => setHoveredLabel(link.label)}

            onMouseLeave={() => setHoveredLabel(null)}
            className={cn(
              "flex items-center gap-2.5 p-2 rounded-full bg-card border border-border font-medium text-foreground transition-all duration-75 select-none",
              // 3D Pop up effect
              "shadow-[0_5px_0_var(--color-border)]",
              // Pushed down on hover
              "hover:translate-y-0.5 hover:shadow-[0_3px_0_var(--color-border)]",
              // Fully pressed on click
              "active:translate-y-1.25 active:shadow-none",
            )}
          >
            <HugeiconsIcon icon={link.icon} size={20} />
            <span className="tracking-tight">{link.label}</span>
          </a>
        ))}
      </div>

      <div className="w-full pt-2 flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
        <p className="text-sm font-medium text-muted-foreground tracking-tight">
          &copy; 2026 Daksh Yadav.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
