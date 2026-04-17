import getStarCount from "@/lib/github";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { StarIcon } from "./animate-ui/icons/star";

const GithubStars = async () => {
  const star_count = await getStarCount();
  return (
    <AnimateIcon asChild animateOnHover>
      <a
        href="https://github.com/0dux/portfolio-website"
        target="_blank"
        className="flex items-center justify-center space-x-1"
      >
        <StarIcon animation="fill" size={16} />{" "}
        <p className="text-sm">{star_count}</p>
      </a>
    </AnimateIcon>
  );
};

export default GithubStars;
