import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-scroll'
import * as Chakra from '@chakra-ui/react';

export function Navigation() {
  return (
    <Flex flexDir={"row"} justifyContent={"right"}
      alignItems={"center"}>
      <Box marginRight="auto">
        <Chakra.Link href="https://txzje.xyz">
          <Image src="https://cutiecat6778.github.io/cdn/logo/logo_102.png" alt="Logo" />
        </Chakra.Link>
      </Box>
      <Text to="about" as={Link} href="#about" spy={true} smooth={true}>About</Text>
      <Text to="skills" as={Link} href="#skills" spy={true} smooth={true} ml="20px">Skills</Text>
      <Text to="education" as={Link} href="#education" spy={true} smooth={true} ml="20px">Education</Text>
      <Text to="contact" as={Link} href="#contact" spy={true} smooth={true} ml="20px">Contact</Text>
    </Flex>
  )
}