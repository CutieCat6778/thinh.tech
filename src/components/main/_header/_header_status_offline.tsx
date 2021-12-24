import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function HeaderStatusBoxOffline() {
  return (
    <Flex>
      <Image src="https://cutiecat6778.github.io/cdn/dictionary.png" />
      <Box ml="10px" color="white">
        <Text size="lg" color={"gray.400"}>
          Is learning
        </Text>
        <Heading>
          Improving my knowledge
        </Heading>
      </Box>
    </Flex>
  )
}