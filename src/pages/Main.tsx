import { Flex, Divider } from "@chakra-ui/react";
import { About } from "../components/about/about";
import { Contact } from "../components/contact/contact";
import { Education } from "../components/education/education";
import { Header } from "../components/main/header.main";
import { Navigation } from "../components/main/navigation.main";
import { Skills } from "../components/skills/skills";

export function Main() {
  return (
    <Flex paddingX={{base: "5vw", sm: "10vw", lg: "18vw" ,xl: "25vw", "2xl": "30vw"}} paddingY="20px" flexDir={"column"} justifyContent={"center"}>
      <Navigation/>
      <Divider marginY="25px"/>
      <Header/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
    </Flex>
  )
}