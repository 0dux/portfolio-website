"use client";

import DetailedProjectCard from "@/components/DetailedProjectCard";
import { projectsDetailed } from "@/lib/projects";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const page = () => {
  return (
    <section className="py-12 px-12 md:py-24" id="projects-detailed">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12 md:gap-24"
      >
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <motion.h2
            variants={itemVariants}
            className="font-serif text-5xl md:text-8xl tracking-tighter text-foreground"
          >
            Selected Works
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-muted-foreground font-sans leading-relaxed tracking-tight"
          >
            A curated collection of full-stack applications, AI integrations,
            and architectural explorations—each built with a focus on
            performance, craft, and user experience.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col border-t border-border/40 divide-y divide-border/40">
          {projectsDetailed.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <DetailedProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default page;
