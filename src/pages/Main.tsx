import { Flex, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { About } from "../components/Main/about/about";
import { Contact } from "../components/Main/contact/contact";
import { Education } from "../components/Main/education/education";
import { Header } from "../components/Main/main/header.main";
import Navigation from "../components/Main/main/navigation.main";
import { Skills } from "../components/Main/skills/skills";
import { Projects } from "../components/Projects/projects";

export function Main() {
  const [toggle, setToggle] = useState(true);

  return (
    <Flex paddingX={{ base: "5vw", sm: "10vw", lg: "18vw", xl: "25vw", "2xl": "30vw" }} paddingY="20px" flexDir={"column"} justifyContent={"center"}>
      <Navigation toggle={toggle} setToggle={setToggle} />
      <Divider marginY="25px" />
      <Header />
      {
        toggle ? <section>
          <About />
          <Skills />
          <Education />
        </section> : <Projects />
      }
      <Contact />
    </Flex>
  )
}