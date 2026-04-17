import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlocksIcon } from "../animate-ui/icons/blocks";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { PaperclipIcon } from "../animate-ui/icons/paperclip";
import GithubStars from "../github-stars";
import { ModeToggle as Themetoggle } from "../toggle-theme";

interface nav_items {
  title: string;
  href: string;
  icon: React.ElementType; //can you teach me about this, what is is and where is this used usually?
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
            className="rounded-full h-12 w-12 border border-gray-200 hover:scale-90 hover:border-2 ease-in-out transition-all"
            src={"/assets/nav_logo.jpg"}
            width={100}
            height={100}
            alt="Home"
          />
        </Link>
        {nav_config.map((item) => {
          const Icon = item.icon;
          return (
            <AnimateIcon asChild animateOnHover key={item.href}>
              <Link
                className="flex items-center justify-center gap-2 group"
                href={item.href}
              >
                <Icon className={"size-4"} /> <p>{item.title}</p>
              </Link>
            </AnimateIcon>
          );
        })}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <GithubStars />
        <Themetoggle />
      </div>
    </nav>
  );
};

export default Navbar;
