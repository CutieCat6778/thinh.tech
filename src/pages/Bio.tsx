import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/bio/_header_index";
import { Section } from "../components/bio/_section_index";

export function Bio() {
  return (
    <Stack
      d="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      spacing={"170px"}
      mb="50px"
    >
      <Link to="/">
        Go back
      </Link>
      <Header />
      <Section />
    </Stack>
  )
}