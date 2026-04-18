"use client";

import ProfileAvatar from "@/components/profile-avatar";
import { Hint } from "@/components/ui/hint";
import { ImageAssets } from "@/lib/assets";
import {
  Github01FreeIcons,
  Link01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import Image from "next/image";

const social_config = [
  {
    label: "GitHub",
    href: "https://github.com/0dux",
    icon: Github01FreeIcons,
    size: 15,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dakshyadav0",
    icon: Linkedin01Icon,
    size: 14,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: Link01Icon,
    size: 14,
  },

  {
    label: "Twitter / X",
    href: "https://x.com/DXKSH_X",
    icon: NewTwitterIcon,
    size: 14,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-1 relative py-8"
    >
      {/* Header Banner */}
      <motion.div
        variants={itemVariants}
        className="relative rounded-2xl w-full aspect-12/4.5 overflow-hidden border border-border shadow-sm"
      >
        <Image
          src={ImageAssets.header}
          fill
          priority
          loading="eager"
          className="object-cover"
          alt="Header image"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </motion.div>

      {/* About section */}
      <div>
        {/* Row: avatar left, socials right */}
        <div className="flex items-end justify-between pr-1">
          {/* Profile Picture */}
          <motion.div variants={itemVariants}>
            <ProfileAvatar
              mainImage={ImageAssets.main}
              flipImage={ImageAssets.flip}
            />
          </motion.div>

          {/* Social Icons row */}
          <div className="flex items-center gap-1.5 pb-2">
            {social_config.map((item, index) => (
              <motion.div key={item.label} variants={itemVariants}>
                <Hint label={item.label} side="top">
                  <a
                    href={item.href}
                    {...(item.label !== "Resume"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={item.label}
                    className="flex items-center justify-center size-9 rounded-full border border-border transition-[transform,background-color] duration-150 ease-out hover:bg-muted hover:scale-110 active:scale-97"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={item.size}
                      className="transition-transform duration-200 ease-out group-hover:scale-110"
                    />
                  </a>
                </Hint>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Name + Tagline */}
        <motion.div variants={itemVariants} className="mt-4 space-y-1">
          <h1 className="font-serif italic text-4xl tracking-tight text-foreground">
            Daksh Yadav
          </h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            23 &bull; engineer &bull; developer
          </p>
        </motion.div>

        {/* Divider */}
        <motion.hr
          variants={itemVariants}
          className="mt-6 border-border border-dashed"
        />

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-foreground/80 w-full font-sans"
        >
          <strong className="text-foreground font-semibold">
            Curiosity is my compiler.
          </strong>{" "}
          I genuinely enjoy the process of turning an idea into something real
          &mdash; designing interfaces, writing APIs, and connecting every layer
          in between. The stack is just a tool; what excites me is crafting
          experiences that feel thoughtful and effortless to the people who use
          them.
        </motion.p>
      </div>
    </motion.main>
  );
};

export default Hero;
