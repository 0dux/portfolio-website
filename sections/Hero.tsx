import { Hint } from "@/components/ui/hint";
import { ImageAssets } from "@/lib/assets";
import getStarCount from "@/lib/github";
import {
  Github01FreeIcons,
  Link01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

const Hero = async () => {
  const star_count = await getStarCount();

  return (
    <main className="mt-1 relative">
      {/* Header Banner */}
      <div className="relative rounded-2xl w-full aspect-12/4.5 overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-xl">
        <Image
          src={ImageAssets.header}
          fill
          priority
          loading="eager"
          className="object-cover"
          alt="Header image"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* About section */}
      <div>
        {/* Row: avatar left, socials right */}
        <div className="flex items-end justify-between pr-1">
          {/* Profile Picture */}
          <div className="relative ml-2 size-32 -mt-16 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-900 shadow-lg cursor-pointer z-10">
            <Image
              src={ImageAssets.main}
              fill
              loading="eager"
              className="object-cover transition-transform duration-500 hover:scale-110"
              alt="Profile Image"
              sizes="128px"
            />
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-1.5 pb-2">
            <Hint label="GitHub" side="top">
              <a
                href="https://github.com/0dux"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center size-9 rounded-full border border-border hover:bg-muted transition-colors duration-200"
              >
                <HugeiconsIcon icon={Github01FreeIcons} size={15} />
              </a>
            </Hint>
            <Hint label="Twitter / X" side="top">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex items-center justify-center size-9 rounded-full border border-border hover:bg-muted transition-colors duration-200"
              >
                <HugeiconsIcon icon={NewTwitterIcon} size={14} />
              </a>
            </Hint>
            <Hint label="Resume" side="top">
              <a
                href="#"
                aria-label="Resume"
                className="flex items-center justify-center size-9 rounded-full border border-border hover:bg-muted transition-colors duration-200"
              >
                <HugeiconsIcon icon={Link01Icon} size={14} />
              </a>
            </Hint>
            <Hint label="LinkedIn" side="top">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center size-9 rounded-full border border-border hover:bg-muted transition-colors duration-200"
              >
                <HugeiconsIcon icon={Linkedin01Icon} size={14} />
              </a>
            </Hint>
          </div>
        </div>

        {/* Name + Tagline */}
        <div className="mt-4 space-y-1">
          <h1 className="font-serif italic text-3xl tracking-tight">
            Daksh Yadav 🐉
          </h1>
          <p className="text-sm text-muted-foreground">
            21 &bull; engineer &bull; developer &bull; builder
          </p>
        </div>

        {/* Divider */}
        <hr className="mt-5 border-border" />

        {/* Bio */}
        <p className="mt-5 text-sm leading-relaxed text-foreground/90 max-w-2xl">
          <strong>I build from zero.</strong> Whether it&apos;s frontend,
          backend, full-stack applications, or AI-powered experiences, I work
          across the entire development lifecycle. From UI/UX to deployment to
          user feedback, I care less about technology debates and more about
          delivering results that people love using.
        </p>
      </div>
    </main>
  );
};

export default Hero;
