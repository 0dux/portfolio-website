import Container from "@/components/common/Container";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

const page = () => {
  return (
    <Container className="space-y-4">
      <Hero />
      <Projects />
    </Container>
  );
};

export default page;
