async function getStarCount() {
  const res = await fetch(
    "https://api.github.com/repos/0dux/portfolio-website",
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const data = await res.json();
  const { stargazers_count: star_count } = data;
  return star_count;
}

export default getStarCount;
