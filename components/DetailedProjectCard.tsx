"use client";

import { Project, projectStatusConfig } from "@/lib/projects";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  GithubIcon,
  PlayIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface DetailedProjectCardProps {
  project: Project;
  index: number;
}

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  const id = match && match[2].length === 11 ? match[2] : null;
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&loop=1&playlist=${id}`;
};

const DetailedProjectCard = ({ project, index }: DetailedProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isAlt = index % 2 !== 0;
  const status = projectStatusConfig[project.status];
  const embedUrl = project.links.demo
    ? getYouTubeEmbedUrl(project.links.demo)
    : null;


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  const getProjectBackground = (id: string) => {
    const seed = parseInt(id) || 0;
    const hues = [(seed * 137.5) % 360, (seed * 137.5 + 60) % 360];
    return {
      background: `
        radial-gradient(circle at 20% 20%, hsl(${hues[0]}, 80%, 90%) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, hsl(${hues[1]}, 80%, 90%) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, hsl(${(hues[0] + 180) % 360}, 70%, 95%) 0%, transparent 100%)
      `,
    };
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative flex flex-col gap-8 md:flex-row md:items-center py-12 md:py-20",
        isAlt && "md:flex-row-reverse",
      )}
    >
      {/* Decorative Index Number */}
      <span
        className={cn(
          "absolute -top-4 left-0 font-serif text-[120px] font-bold leading-none text-muted/10 pointer-events-none select-none",
          isAlt ? "md:left-auto md:right-0" : "md:left-0",
        )}
      >
        0{index + 1}
      </span>

      {/* Visual Section */}
      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ y, scale }}
        className="relative w-full md:w-[55%] shrink-0 cursor-pointer"
      >
        <div
          className="relative aspect-16/10 overflow-hidden rounded-[40px] border border-border bg-muted shadow-2xl transition-shadow group-hover:shadow-3xl"
          style={getProjectBackground(project.id)}
        >
          {/* Halftone & Noise Patterns */}
          <div className="absolute inset-0 z-0 bg-dot-pattern text-foreground/5 pointer-events-none" />
          <div className="absolute inset-0 z-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

          {/* Floating Image/Video Wrapper */}
          <motion.div
            initial={{ y: 20, rotateX: 5 }}
            whileInView={{ y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: -2, rotateY: 2 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-full w-full z-10 p-4 md:p-8 flex items-center justify-center transform-gpu"
            style={{ perspective: "1000px" }}
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-transform duration-500 bg-background/5">
              <AnimatePresence>
                {isHovering && embedUrl ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 z-20 bg-black"
                  >
                    <iframe
                      src={embedUrl}
                      className="h-full w-full object-cover relative scale-[1.02]"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={80}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Play Icon on Hover - Indicator that it's playable */}
                    {embedUrl && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-all duration-300"
                      >
                        <div className="rounded-full bg-white/20 backdrop-blur-xl p-6 text-white border border-white/30 shadow-2xl">
                          <HugeiconsIcon
                            icon={PlayIcon}
                            size={32}
                            fill="currentColor"
                          />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div
        className={cn(
          "relative flex flex-col gap-6 w-full md:w-[45%]",
          isAlt ? "md:pr-12" : "md:pl-12",
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] font-medium tracking-wide uppercase bg-background/50 backdrop-blur-sm self-start mt-2 md:mt-4">
              <span
                className={cn("size-1.5 rounded-full", status.dotClassName)}
              />
              {status.shortLabel}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <HugeiconsIcon
              icon={
                project.progress === "completed"
                  ? CheckmarkCircle01Icon
                  : Clock01Icon
              }
              size={16}
              className={cn(
                project.progress === "completed"
                  ? "text-green-500"
                  : "text-amber-500",
              )}
            />
            <span className="capitalize">{project.progress}</span>
            <span className="mx-1">•</span>
            <span className="text-foreground/80">Personal Project</span>
          </div>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
          {project.description}
        </p>

        {/* Tech Stack - Pill Grid */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground hover:bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              className="flex items-center gap-2 rounded-2xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-95 transform-gpu"
            >
              <HugeiconsIcon icon={GithubIcon} size={18} />
              Repository
            </Link>
          )}
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              className="flex items-center gap-2 rounded-2xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-95 transform-gpu"
            >
              Launch Site
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectCard;
