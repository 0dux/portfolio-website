import Container from "@/components/common/Container";

const page = () => {
  return (
    <Container>
      <div //why does this w-7xl overflow the container width?
        className="w-full"
      ></div>
    </Container>
  );
};

export default page;
