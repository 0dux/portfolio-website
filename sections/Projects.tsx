"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-8" id="projects">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl tracking-tight text-foreground"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full text-muted-foreground"
          >
            A collection of things I've built, ranging from web applications to
            experimental AI tools and design explorations.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
