import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-scroll'
import * as Chakra from '@chakra-ui/react';

export function Navigation() {
  return (
    <Flex flexDir={"row"} justifyContent={"right"}
      alignItems={"center"}>
      <Box marginRight="auto">
        <Link to="https://txzje.xyz">
          <Image boxSize="80px" src="https://cutiecat6778.github.io/cdn/logo/logo_102.png" alt="Logo"/>
        </Link>
      </Box>
      <Chakra.Link href="#about" >
        <Text to="about" as={Link} spy={true} smooth={true}>About</Text>
      </Chakra.Link>
      <Chakra.Link href="#skills" ml="20px">
        <Text to="skills" as={Link} spy={true} smooth={true}>Skills</Text>
      </Chakra.Link>
      <Chakra.Link href="#education" ml="20px">
        <Text to="education" as={Link} spy={true} smooth={true}>Education</Text>
      </Chakra.Link>
      <Chakra.Link href="#contact" ml="20px">
        <Text to="contact" as={Link} spy={true} smooth={true}>Contact</Text>
      </Chakra.Link>
    </Flex>
  )
}