import { ProjectAssets } from "./assets";

export interface Project {
  id: string;
  title: string;
  description: string;
  progress: "completed" | "in progress" | "incomplete";
  status: "operational" | "out of service" | "gemini credits exhausted";
  techStack: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projectStatusConfig: Record<
  Project["status"],
  {
    label: string;
    shortLabel: string;
    dotClassName: string;
  }
> = {
  operational: {
    label: "All systems operational",
    shortLabel: "Active",
    dotClassName: "bg-green-500 animate-status-pulse",
  },
  "out of service": {
    label: "Out of service",
    shortLabel: "Down",
    dotClassName: "bg-red-500",
  },
  "gemini credits exhausted": {
    label: "Gemini credits exhausted",
    shortLabel: "Credits exhausted",
    dotClassName: "bg-amber-500",
  },
};

export const projects: Project[] = [
  {
    id: "1",
    title: "FrameGen",
    description:
      "An AI-powered YouTube thumbnail generator where users pick a style, aspect ratio, and color palette to generate professional thumbnails using Google Gemini AI. Features Google OAuth, a credits system, and a community gallery.",
    progress: "completed",
    status: "gemini credits exhausted",
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Gemini AI",
      "Express",
      "MongoDB",
    ],
    image: ProjectAssets.frame_gen,
    links: {
      github: "https://github.com/0dux/FrameGen",
      live: "https://frame-gen.dxksh.tech",
    },
  },
  {
    id: "2",
    title: "Flux",
    description:
      "An AI-powered website builder that generates complete, functional websites from natural language prompts with a conversational interface for iterative refinement. Features live preview, version history with one-click rollback, and a community marketplace.",
    progress: "completed",
    status: "operational",
    techStack: [
      "React",
      "TypeScript",
      "Gemini-3-Flash",
      "Express",
      "PostgreSQL",
    ],
    image: ProjectAssets.flux,
    links: {
      github: "https://github.com/0dux/Flux-Website-Builder",
      live: "https://flux.dxksh.tech",
    },
  },
  {
    id: "3",
    title: "Whispry",
    description:
      "A full-stack real-time chat app with instant text and image messaging, online presence tracking, and JWT-based auth. Built with Next.js, Express, Socket.IO, and PostgreSQL, with Cloudinary for image storage and Arcjet for rate limiting.",
    progress: "completed",
    status: "operational",
    techStack: ["Next.js", "TypeScript", "Socket.IO", "Express", "PostgreSQL"],
    image: ProjectAssets.whispry,
    links: {
      github: "https://github.com/0dux/Whispry",
      live: "https://whispry.dxksh.tech",
    },
  },
];

export const projectsDetailed: Project[] = [
  {
    id: "1",
    title: "FrameGen",
    description:
      "An AI-powered YouTube thumbnail generator for content creators. Enter a video title, select a style, aspect ratio, and color palette to generate professional thumbnails using Google Gemini AI. Features Google OAuth 2.0, a credits system, save & manage generations, and a community gallery.",
    progress: "completed",
    status: "gemini credits exhausted",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Google Gemini AI",
      "Shadcn/ui",
    ],
    image: ProjectAssets.frame_gen,
    links: {
      github: "https://github.com/0dux/FrameGen",
      live: "https://frame-gen.dxksh.tech",
      demo: "https://www.youtube.com/embed/lXogiTmWDvY?si=sF9zVXSI1MVI9AHz",
    },
  },
  {
    id: "2",
    title: "Flux",
    description:
      "An AI-powered website builder that generates complete, functional websites from natural language prompts. Features a conversational interface for iterative refinement, live preview across device sizes, version history with one-click rollback, credit system, and a community marketplace.",
    progress: "completed",
    status: "operational",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/ui",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Better-Auth",
      "Gemini-3-Flash",
    ],
    image: ProjectAssets.flux,
    links: {
      github: "https://github.com/0dux/Flux-Website-Builder",
      live: "https://flux.dxksh.tech",
      demo: "https://www.youtube.com/embed/HOjH3C0DaaQ?si=B2R4G7uyGvOqpBdW",
    },
  },
  {
    id: "3",
    title: "Whispry",
    description:
      "A fast, minimal full-stack real-time chat application with instant text and image messaging powered by Socket.IO. Features online presence tracking, JWT-based authentication, profile picture uploads via Cloudinary, transactional welcome emails via Resend, and rate limiting with Arcjet.",
    progress: "completed",
    status: "operational",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Cloudinary",
      "Resend",
      "Arcjet",
      "Zustand",
      "Framer Motion",
    ],
    image: ProjectAssets.whispry,
    links: {
      github: "https://github.com/0dux/Whispry",
      live: "https://whispry.dxksh.tech",
      demo: "https://www.youtube.com/embed/vFP2gQr6Gvg?si=W--l4WxxQfR1KmR_",
    },
  },
];
