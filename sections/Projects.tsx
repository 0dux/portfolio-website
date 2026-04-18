"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
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

const Projects = () => {
  return (
    <section className="py-8" id="projects-detailed">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        {/* Section Header */}
        <div className="space-y-4">
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl tracking-tight text-foreground"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="w-full text-muted-foreground font-sans leading-relaxed"
          >
            A collection of things I've built, ranging from web applications to
            AI integrations, and much more.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
