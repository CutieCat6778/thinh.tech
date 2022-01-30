import { Flex, Divider } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { About } from "../components/Main/about/about";
import { Contact } from "../components/Main/contact/contact";
import { Header } from "../components/Main/main/header.main";
import Navigation from "../components/Main/main/navigation.main";
import { Skills } from "../components/skills/skills";
import { Projects } from "../components/Projects/projects";

export function Main() {
  const [toggle, setToggle] = useState(true);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Flex
      paddingX={{
        base: "5vw",
        sm: "10vw",
        lg: "18vw",
        xl: "25vw",
        "2xl": "30vw",
      }}
      paddingY="20px"
      flexDir={"column"}
      justifyContent={"center"}
    >
      <Navigation toggle={toggle} setToggle={setToggle} />
      <Divider marginY="25px" />
      <Header />
      <About y={y}/>
      <Skills y={y} />
      <Projects y={y} />
      <Contact />
    </Flex>
  );
}
