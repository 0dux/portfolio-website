import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BlocksIcon, PaperclipIcon } from "lucide-react";
import GithubStars from "../github-stars";
import { ModeToggle as Themetoggle } from "../toggle-theme";

interface nav_items {
  title: string;
  href: string;
  icon: React.ElementType;
}

const nav_config: nav_items[] = [
  {
    title: "Projects",
    href: "/projects",
    icon: BlocksIcon,
  },
  {
    title: "Resume",
    href: "/resume",
    icon: PaperclipIcon,
  },
];

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto px-4 container flex justify-between items-center py-2 border-b">
      <div className="flex items-center justify-center space-x-8">
        <Link href={"/"}>
          <Image
            loading="eager"
            className="rounded-full h-10 w-10 border border-gray-200 hover:scale-90 ease-in-out transition-all duration-300"
            src={"/assets/nav_logo.jpg"}
            width={100}
            height={100}
            alt="Home"
          />
        </Link>
        {nav_config.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              className="flex items-center justify-center gap-2 group"
              href={item.href}
            >
              <Icon className={"size-4"} />{" "}
              <p className="text-sm">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <React.Suspense fallback={<div className="w-10 h-5" />}>
          <GithubStars />
        </React.Suspense>
        <Themetoggle />
      </div>
    </nav>
  );
};

export default Navbar;
