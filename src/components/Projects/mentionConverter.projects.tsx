import { Box, Button, Flex, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";

export function MentionConverter() {
  return (
    <Flex maxW="400px" borderRadius={"12px"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
      <Image borderRadius={"17px"} src="https://cutiecat6778.github.io/cdn/npm-logo_96.png" />
      <Box mr="auto" mt="30px">
        <Heading fontSize="3xl">
          Mention Converter
        </Heading>
        <Text maxW="300px" textAlign={"left"} fontSize={"20px"}>
          It is a npm package that support DiscordJS library.
        </Text>
      </Box>
      <Stack direction={"row"} mt="10px">
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #discord
        </Tag>
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #tool
        </Tag>
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #npm
        </Tag>
      </Stack>
      <Flex mt="10px">
        <Button width={"145px"} paddingX="30px" colorScheme={"gray"}>
          <Link _hover={{
            textDecoration: "none"
          }} href="https://www.npmjs.com/package/mention-converter">
            Website
          </Link>
        </Button>
        <Button width={"145px"} paddingX="30px" ml="10px">
          <Link _hover={{
            textDecoration: "none"
          }} href="https://github.com/CutieCat6778/mention-converter">
            Github
          </Link>
        </Button>
      </Flex>
    </Flex>
  )
}