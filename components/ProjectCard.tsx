"use client";

import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  GithubIcon,
  PlayIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Generate a unique background based on project ID
  const getProjectBackground = (id: string) => {
    const seed = parseInt(id) || 0;
    const hues = [(seed * 137.5) % 360, (seed * 137.5 + 60) % 360];
    return {
      background: `
        radial-gradient(circle at 20% 20%, hsl(${hues[0]}, 80%, 85%) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, hsl(${hues[1]}, 80%, 85%) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, hsl(${(hues[0] + 180) % 360}, 70%, 90%) 0%, transparent 100%)
      `,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ translateY: -4 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} // var(--ease-out)
      className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Image Section */}
      <div
        className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted/50"
        style={getProjectBackground(project.id)}
      >
        {/* Halftone Pattern Backdrop */}
        <div className="absolute inset-0 z-0 bg-dot-pattern text-foreground/5 pointer-events-none" />
        {/* Grainy Noise Backdrop */}
        <div className="absolute inset-0 z-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

        <motion.div
          initial={{ y: 30, scale: 0.9 }}
          whileHover={{ y: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative h-full w-full z-10"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={100}
            className="object-cover rounded-xl shadow-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl italic tracking-tight text-foreground">
            {project.title}
          </h3>

          {/* Status Badge */}
          <div className="flex items-center gap-2 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase">
            <span
              className={cn(
                "size-1.5 rounded-full",
                project.status === "operational"
                  ? "bg-green-500 animate-status-pulse"
                  : "bg-red-500",
              )}
            />
            {project.status === "operational"
              ? "All systems operational"
              : "Out of service"}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <HugeiconsIcon
            icon={
              project.progress === "completed"
                ? CheckmarkCircle01Icon
                : Clock01Icon
            }
            size={14}
            className={cn(
              project.progress === "completed"
                ? "text-green-500"
                : "text-amber-500",
            )}
          />
          <span className="capitalize">{project.progress}...</span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground/90 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-muted/50 px-2 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions Section */}
      <div className="mt-auto flex items-center gap-3 pt-2">
        {project.links.github && (
          <Link
            href={project.links.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:opacity-90 active:scale-95 ease-out"
          >
            <HugeiconsIcon icon={GithubIcon} size={14} />
            GitHub
          </Link>
        )}
        {project.links.live && (
          <Link
            href={project.links.live}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-95 ease-out"
          >
            Live Demo
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </Link>
        )}
        {project.links.demo && (
          <Link
            href={project.links.demo}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-95 ease-out"
          >
            Demo
            <HugeiconsIcon icon={PlayIcon} size={14} />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
