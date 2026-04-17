import Image from "next/image";
import Link from "next/link";
import { BlocksIcon } from "../animate-ui/icons/blocks";
import { AnimateIcon } from "../animate-ui/icons/icon";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto px-4 container flex justify-between py-2">
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
        <AnimateIcon asChild animateOnHover>
          <Link
            className="flex items-center justify-center gap-2 group"
            href={"/projects"}
          >
            <BlocksIcon className={"w-4 h-4"} /> Projects
          </Link>
        </AnimateIcon>
        <Link href={"/resume"}>Resume</Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
