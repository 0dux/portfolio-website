"use client";

import { cn } from "@/lib/utils";
import {
  ArrowLeft02Icon,
  Download02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const ResumePage = () => {
  const RESUME_URL = "https://drive.google.com/file/d/18JVlxWCY4oOeUE1_qD1YHyyxL8rnlFl2/preview";
  const DOWNLOAD_URL = "https://drive.google.com/file/d/18JVlxWCY4oOeUE1_qD1YHyyxL8rnlFl2/view?usp=sharing";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          <div className="flex items-center gap-4">
            <h1 className="text-sm font-semibold tracking-tight hidden sm:block">
              daksh_yadav_resume.pdf
            </h1>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-bold hover:opacity-90 transition-opacity"
            >
              <HugeiconsIcon icon={Download02Icon} size={16} />
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full aspect-[1/1.414] bg-card border border-border rounded-xl shadow-2xl overflow-hidden group"
        >
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
          
          <iframe
            src={RESUME_URL}
            className="w-full h-full border-none"
            title="Daksh Yadav Resume"
            allow="autoplay"
          />

          {/* Fallback/Overlay if needed (Google Drive handles its own UI usually) */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border text-[10px] font-mono text-muted-foreground">
                VIEWING MODE
             </div>
          </div>
        </motion.div>
      </main>

      {/* Footer hint */}
      <footer className="py-8 text-center opacity-40">
        <p className="text-[10px] font-mono uppercase tracking-widest">
            Handcrafted with precision • 2026
        </p>
      </footer>
    </div>
  );
};

export default ResumePage;
