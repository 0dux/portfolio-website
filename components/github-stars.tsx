import getStarCount from "@/lib/github";
import { GithubIcon } from "./ui/github";
import { Hint } from "./ui/hint";

const GithubStars = async () => {
  const star_count = await getStarCount();
  return (
    <Hint label={`${star_count} Github Stars`} side="bottom">
      <a
        href="https://github.com/0dux/portfolio-website"
        target="_blank"
        className="flex items-center justify-center space-x-1 group transition-transform active:scale-95 duration-150 ease-out"
      >
        <GithubIcon size={16} />
        <p>{star_count}</p>
      </a>
    </Hint>
  );
};

export default GithubStars;
