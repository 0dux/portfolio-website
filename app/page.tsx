import Container from "@/components/common/Container";
import GithubContributions from "@/sections/GithubContributions";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import Footer from "@/sections/Footer";


const page = () => {
  return (
    <Container className="">
      <Hero />
      <Projects />
      <TechStack />
      <GithubContributions />
      <Footer />

    </Container>
  );
};

export default page;
