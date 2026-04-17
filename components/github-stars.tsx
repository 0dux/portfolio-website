import getStarCount from "@/lib/github";
import { GithubIcon } from "./ui/github-icon";

const GithubStars = async () => {
  const star_count = await getStarCount();
  return (
    <div className="flex items-center justify-center space-x-1">
      <GithubIcon size={16} /> <p>{star_count}</p>
    </div>
  );
};

export default GithubStars;
