import { Box, Button, Flex, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";

export function Noobs() {
  return (
    <Flex maxW="400px" borderRadius={"12px"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
      <Image borderRadius={"17px"} src="https://cutiecat6778.github.io/cdn/noobs_96.png" alt="Noobs logo" />
      <Box mr="auto" mt="28px">
        <Heading fontSize="3xl">
          Noobs
        </Heading>
        <Text maxW="300px" textAlign={"left"} fontSize={"20px"}>
          A discord bot, that help Noobs manage their comunity.
        </Text>
      </Box>
      <Stack direction={"row"} mt="10px">
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #discord
        </Tag>
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #bot
        </Tag>
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #comunity
        </Tag>
      </Stack>
      <Flex mt="10px">
      <Button width={"145px"} paddingX="30px" colorScheme={"gray"}>
          <Link _hover={{
            textDecoration: "none"
          }} href="https://discord.gg/UepWd7csWV">
            Discord
          </Link>
        </Button>
        <Button width={"145px"} paddingX="30px" ml="10px">
          <Link _hover={{
            textDecoration: "none"
          }} href="https://github.com/CutieCat6778/bot_discordjs">
            Github
          </Link>
        </Button>
      </Flex>
    </Flex>
  )
}