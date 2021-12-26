import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/projects/_header_index";
import { SectionIndex } from "../components/projects/_section_index";

export function Projects() {
  return (
    <Stack spacing="200px">
      <Header/>
      <SectionIndex/>
      <Link to="/">
        <Text textAlign={"center"} fontSize={"3xl"}>
          Go back
        </Text>
      </Link>
    </Stack>
  )
}