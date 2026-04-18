"use client";

import Magnetic from "@/components/ui/magnetic";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "C++", slug: "cplusplus" },
  { name: "Python", slug: "python" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express.js", slug: "express" },
  { name: "TailwindCSS", slug: "tailwindcss" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Shadcn/ui", slug: "shadcnui" },
  { name: "Zod", slug: "zod" },
  { name: "Socket.io", slug: "socketdotio" },
  { name: "Redux", slug: "redux" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

/**
 * TechStack Section
 * Displays a grid of magnetic tags with icons that transition from monochrome to color on hover.
 */
const TechStack = () => {
  return (
    <section id="tech-stack" className="py-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-8"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 group"
        >
          <h2 className="font-serif text-3xl tracking-tight text-foreground">
            Tech-Stack
          </h2>
        </motion.div>

        {/* Tags Cloud */}
        <div className="flex flex-wrap gap-4 items-center">
          {technologies.map((tech) => (
            <motion.div key={tech.slug} variants={itemVariants}>
              <Magnetic>
                <div className="flex items-center gap-3 bg-card border border-border px-4 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-[shadow,background-color] group cursor-default">
                  <div className="relative size-6 flex items-center justify-center">
                    <Image
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
                      alt={tech.name}
                      width={24}
                      height={24}
                      unoptimized={true}
                      className="grayscale group-hover:grayscale-0 transition-all duration-300 ease-out brightness-0 dark:invert group-hover:brightness-100 dark:group-hover:invert-0"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground tracking-tight">
                    {tech.name}
                  </span>
                </div>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          variants={itemVariants}
          className="text-lg leading-snug font-medium text-foreground tracking-tight"
        >
          I can learn faster while I&apos;m working
        </motion.p>
      </motion.div>
    </section>
  );
};

export default TechStack;
