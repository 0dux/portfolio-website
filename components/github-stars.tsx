import getStarCount from "@/lib/github";
import { GithubIcon } from "./ui/github";

const GithubStars = async () => {
  const star_count = await getStarCount();
  return (
    <>
      <a
        href="https://github.com/0dux/portfolio-website"
        target="_blank"
        className="flex items-center justify-center space-x-1 group"
      >
        <GithubIcon size={16} />
        <p>{star_count}</p>
      </a>
    </>
  );
};

export default GithubStars;
