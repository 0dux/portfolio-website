import Container from "@/components/common/Container";
import Footer from "@/sections/Footer";
import GithubContributions from "@/sections/GithubContributions";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";

const page = () => {
  return (
    <Container>
      <Hero />
      <Projects />
      <TechStack />
      <GithubContributions />
      <Footer />
    </Container>
  );
};

export default page;
