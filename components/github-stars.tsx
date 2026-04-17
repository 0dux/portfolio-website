import getStarCount from "@/lib/github";
import { StarIcon } from "lucide-react";

const GithubStars = async () => {
  const star_count = await getStarCount();
  return (
    <a
      href="https://github.com/0dux/portfolio-website"
      target="_blank"
      className="flex items-center justify-center space-x-1 group"
    >
      <StarIcon
        className="group-hover:text-yellow-400 transition-colors duration-300"
        size={16}
      />
      <p className="group-hover:text-yellow-400 transition-colors duration-300 text-sm">
        {star_count}
      </p>
    </a>
  );
};

export default GithubStars;
