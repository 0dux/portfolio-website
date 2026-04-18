import Container from "@/components/common/Container";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";

const page = () => {
  return (
    <Container className="space-y-8">
      <Hero />
      <Projects />
      <TechStack />
    </Container>
  );
};

export default page;
