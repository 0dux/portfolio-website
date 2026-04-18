import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import fileData from "../../lottie/file.json";
import folderData from "../../lottie/folder.json";
import GithubStars from "../github-stars";
import { ModeToggle as Themetoggle } from "../toggle-theme";
import LottieIcon from "./LottieIcon";

interface IconProps {
  className?: string;
}

interface nav_items {
  title: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

const nav_config: nav_items[] = [
  {
    title: "Projects",
    href: "/projects",
    icon: (props: IconProps) => (
      <LottieIcon animationData={folderData} {...props} />
    ),
  },
  {
    title: "Resume",
    href: "/resume",
    icon: (props: IconProps) => (
      <LottieIcon animationData={fileData} {...props} />
    ),
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <Container className="flex justify-between items-center py-2">
        <div className="flex items-center justify-center space-x-8">
          <Link href={"/"}>
            <Image
              loading="eager"
              className="rounded-full h-10 w-10 border border-border shadow-sm hover:scale-105 active:scale-95 transition-transform duration-150 [transition-timing-function:var(--ease-out)]"
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
                key={item.href}
                className="flex items-center justify-center gap-2 group transition-all duration-200 active:scale-95 [transition-timing-function:var(--ease-out)] hover:text-primary"
                href={item.href}
              >
                <Icon className={"size-5 transition-transform group-hover:scale-110 duration-200 [transition-timing-function:var(--ease-out)]"} />{" "}
                <p className="text-sm font-medium">{item.title}</p>
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
      </Container>
    </nav>
  );
};

export default Navbar;
