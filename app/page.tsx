import Container from "@/components/common/Container";
import Navbar from "@/components/common/Navbar";

const page = () => {
  return (
    <Container>
      <div //why does this w-7xl overflow the container width?
        className="w-full"
      >
        random ass shit
        <Navbar />
      </div>
    </Container>
  );
};

export default page;
