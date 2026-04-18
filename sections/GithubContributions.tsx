"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

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

const GithubContributions = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contributions" className="py-8">
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
            Contributions
          </h2>
        </motion.div>

        {/* Calendar Wrapper */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border p-8 rounded-2xl shadow-sm overflow-hidden flex flex-col items-center"
        >
          <div className="w-full max-w-full overflow-x-auto no-scrollbar pb-2">
            <GitHubCalendar
              username="0dux"
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              blockRadius={3}
              blockSize={13}
              blockMargin={4}
              fontSize={13}
              theme={{
                light: ["#f1f5f9", "#cbd5e1", "#94a3b8", "#64748b", "#475569"],
                dark: ["#1e293b", "#334155", "#475569", "#94a3b8", "#f8fafc"],
              }}
            />
          </div>
        </motion.div>

        {/* Optional: Footer Text style like TechStack */}
        <motion.p
          variants={itemVariants}
          className="text-lg leading-snug font-medium text-foreground tracking-tight"
        >
          Building consistency, one commit at a time.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default GithubContributions;
