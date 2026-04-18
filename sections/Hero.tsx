import ProfileAvatar from "@/components/profile-avatar";
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

const social_config = [
  {
    label: "GitHub",
    href: "https://github.com/0dux",
    icon: Github01FreeIcons,
    size: 15,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dakshyadav0",
    icon: Linkedin01Icon,
    size: 14,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/18JVlxWCY4oOeUE1_qD1YHyyxL8rnlFl2/view?usp=sharing",
    icon: Link01Icon,
    size: 14,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/DXKSH_X",
    icon: NewTwitterIcon,
    size: 14,
  },
];

const Hero = async () => {
  const star_count = await getStarCount();

  return (
    <main className="mt-1 relative">
      {/* Header Banner */}
      <div className="relative rounded-2xl w-full aspect-12/4.5 overflow-hidden border border-border shadow-sm">
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
          <ProfileAvatar
            mainImage={ImageAssets.main}
            flipImage={ImageAssets.flip}
          />

          {/* Social Icons row */}
          <div className="flex items-center gap-1.5 pb-2">
            {social_config.map((item) => (
              <Hint key={item.label} label={item.label} side="top">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex items-center justify-center size-9 rounded-full border border-border transition-[transform,background-color] duration-150 ease-out hover:bg-muted hover:scale-110 active:scale-95"
                >
                  <HugeiconsIcon icon={item.icon} size={item.size} className="transition-transform duration-200 ease-out group-hover:scale-110" />
                </a>
              </Hint>
            ))}
          </div>
        </div>

        {/* Name + Tagline */}
        <div className="mt-4 space-y-1">
          <h1 className="font-serif italic text-4xl tracking-tight text-foreground">
            Daksh Yadav
          </h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            23 &bull; engineer &bull; developer
          </p>
        </div>

        {/* Divider */}
        <hr className="mt-6 border-border border-dashed" />

        {/* Bio */}
        <p className="mt-5 text-base leading-relaxed text-foreground/80 w-full font-sans">
          <strong className="text-foreground font-semibold">
            I build from zero.
          </strong>{" "}
          Whether it&apos;s frontend, backend, full-stack applications, or
          AI-powered experiences, I work across the entire development
          lifecycle. From UI/UX to deployment to user feedback, I care less
          about technology debates and more about delivering results that people
          love using.
        </p>
      </div>
    </main>
  );
};

export default Hero;
