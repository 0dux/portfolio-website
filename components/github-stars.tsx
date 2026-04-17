import getStarCount from "@/lib/github";
import { StarIcon } from "lucide-react";

const GithubStars = async () => {
  const star_count = await getStarCount();
  return (
    <a
      href="https://github.com/0dux/portfolio-website"
      target="_blank"
      className="flex items-center justify-center space-x-1"
    >
      <StarIcon size={16} /> <p className="text-sm">{star_count}</p>
    </a>
  );
};

export default GithubStars;
