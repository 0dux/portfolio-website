import { ProjectAssets } from "./assets";

export interface Project {
  id: string;
  title: string;
  description: string;
  progress: "completed" | "in progress" | "incomplete";
  status: "operational" | "out of service";
  techStack: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FrameGen",
    description:
      "An AI-powered YouTube thumbnail generator where users pick a style, aspect ratio, and color palette to generate professional thumbnails using Google Gemini AI. Features Google OAuth, a credits system, and a community gallery.",
    progress: "completed",
    status: "operational",
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
