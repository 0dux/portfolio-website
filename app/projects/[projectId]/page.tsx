"use client";
import Container from "@/components/common/Container";
import { useParams } from "next/navigation";

const page = () => {
  const { projectId } = useParams();
  return <Container>Project ID: {projectId}</Container>;
};

export default page;
