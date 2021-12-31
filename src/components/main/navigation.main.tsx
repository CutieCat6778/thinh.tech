import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-scroll'

export function Navigation() {
  return (
    <Flex flexDir={"row"} justifyContent={"right"}
      alignItems={"center"}>
      <Box marginRight="auto">
        <Image src="https://cutiecat6778.github.io/cdn/blog-logo.png" />
      </Box>
      <Text as={Link} to="about" spy={true} smooth={true}>
        <Text>About</Text>
      </Text>
      <Text as={Link} to="skills" spy={true} smooth={true} ml="20px">
        <Text>Skills</Text>
      </Text>
      <Text as={Link} to="education" spy={true} smooth={true} ml="20px">
        <Text>Education</Text>
      </Text>
      <Text as={Link} to="contact" spy={true} smooth={true} ml="20px">
        <Text>Contact</Text>
      </Text>
    </Flex>
  )
}