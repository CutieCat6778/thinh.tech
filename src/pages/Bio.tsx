import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/bio/_header_index";
import { Section } from "../components/bio/_section_index";

export function Bio() {
  return (
    <Flex
      alignItems={"center"}
      width={"100%"}
      justifyContent={"space-between"}
      flexDirection={"column"}
    >
      <Link to="/">
        Go back
      </Link>
      <Header/>
      <Section/>
    </Flex>
  )
}