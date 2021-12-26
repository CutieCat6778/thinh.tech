import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justifyContent={'space-between'} m="30px">
      <Box mr="80px">
        <Heading fontFamily={"Space Mono"} fontSize={"3xl"}>Below are all my ✨ Projects ✨</Heading>
        <Text fontFamily={"Space Mono"} maxW="550px">Each projects are my process, they are memories and times. My programming learning process starting from 0.</Text>
      </Box>
    </Flex>
  )
}