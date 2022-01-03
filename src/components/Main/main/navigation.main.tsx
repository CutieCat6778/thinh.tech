import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-scroll'
import * as Chakra from '@chakra-ui/react';
import React from "react";
import { NavigationToggle } from "../../../interface/state";

const Navigation: React.FC<NavigationToggle> = ({ toggle, setToggle }) => {
  const toggleProject = () => {
    setToggle(!toggle);
  }

  const toggleProjectOff = () => {
    setToggle(true);
  }

  return (
    <Flex flexDir={"row"} justifyContent={"right"}
      alignItems={"center"}>
      <Box marginRight="auto">
        <Chakra.Link href="https://txzje.xyz">
          <Image src="https://cutiecat6778.github.io/cdn/logo/logo_118.png" alt="Logo" />
        </Chakra.Link>
      </Box>
      <Flex d={{base: "none", md: "flex"}}>
        <Text onClick={toggleProjectOff} to="about" as={Link} href="#about" spy={true} smooth={true}>About</Text>
        <Text onClick={toggleProjectOff} to="skills" as={Link} href="#skills" spy={true} smooth={true} ml="20px">Skills</Text>
        <Text onClick={toggleProjectOff} to="education" as={Link} href="#education" spy={true} smooth={true} ml="20px">Education</Text>
        <Text onClick={toggleProjectOff} to="contact" as={Link} href="#contact" spy={true} smooth={true} ml="20px">Contact</Text>
        <Text onClick={toggleProject} ml="20px">Projects</Text>
      </Flex>
    </Flex>
  )
}

export default Navigation;