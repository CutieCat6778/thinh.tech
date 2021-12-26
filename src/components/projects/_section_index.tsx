import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";

export function SectionIndex() {
  return (
    <Stack d="flex" flexDir={"column"} justifyContent={"center"} alignItems={"center"} fontFamily={"Space Mono"} spacing={"80px"} textAlign={{ base: "center", sm: "left" }}>
      <Flex flexDir={{ base: "column", sm: "row" }} justifyContent={{ base: "center", sm: "left" }}>
        <Box>
          <Heading d="inline-block">
            Moddy
          </Heading>
          <Tag fontSize={"1xl"} ml="15px" colorScheme={"blue"} variant={"solid"}>10. April 2020</Tag>
          <Text maxW="550px">
            It is a discord bot, that has a multi-purpose (server control,
            api interaction and utility commands). It is based on <Link href="https://discord.js.org">discord.js</Link>
            library and <Link href="https://discord.com">discord api</Link>.
          </Text>
          <Flex mt="20px" justifyContent="center">
            <Link href="https://moddy.js.org">
              <ExternalLinkIcon boxSize={{ base: "20px", sm: "30px" }} />
            </Link>
            <Link ml="15px" href="https://github.com/CutieCat6778/moddy-djs">
              <Image boxSize={{ base: "20px", sm: "30px" }} src="https://cutiecat6778.github.io/cdn/github.png" alt="Github logo" />
            </Link>
          </Flex>
        </Box>
        <Flex justifyContent={{ base: "center", sm: "left" }}>
          <Image ml={{base: "0px", sm:"30px"}} boxSize={"170px"} src="https://cutiecat6778.github.io/cdn/pfp.png" />
        </Flex>
      </Flex>
      <Flex flexDir={{ base: "column-reverse", sm: "row" }}>
        <Flex justifyContent={{ base: "center", sm: "left" }}>
          <Image mr={{base: "0px", sm:"30px"}} boxSize={"170px"} src="https://cutiecat6778.github.io/cdn/npm-logo.png" />
        </Flex>
        <Box>
          <Heading d={{ base: "block", sm: "inline-block" }}>
            Mention-Converter
          </Heading>
          <Tag fontSize={"1xl"} ml="15px" colorScheme={"red"} variant={"solid"}>15. February 2021</Tag>
          <Text maxW="550px">
            It is a npm package, that allow user convert the discord mention
            format to a useable format (json, string). Based on <Link href="https://discord.js.org">discord.js</Link>
            library and <Link href="https://discord.com">discord api</Link>.
          </Text>
          <Flex mt="20px" justifyContent="center">
            <Link href="https://www.npmjs.com/package/mention-converter">
              <ExternalLinkIcon boxSize={{ base: "20px", sm: "30px" }} />
            </Link>
            <Link ml="15px" href="https://github.com/CutieCat6778/mention-converter">
              <Image boxSize={{ base: "20px", sm: "30px" }} src="https://cutiecat6778.github.io/cdn/github.png" alt="Github logo" />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDir={{ base: "column", sm: "row" }} justifyContent={{ base: "center", sm: "left" }}>
        <Box>
          <Heading d={{ base: "block", sm: "inline-block" }}>
            WeatherNOW
          </Heading>
          <Tag fontSize={"1xl"} ml="15px" colorScheme={"yellow"} variant={"solid"}>19. Juni 2020</Tag>
          <Text maxW="550px">
            It is a website that shows you what the current weather is
            (temperature, wind speed and more). It is based on <Link href="http://weatherapi.com/">weatherapi.com</Link>
            library and <Link href="https://www.bing.com/maps">Bing Map API</Link>.
          </Text>
          <Flex mt="20px" justifyContent="center">
            <Link href="https://moddy.js.org">
              <ExternalLinkIcon boxSize={{ base: "20px", sm: "30px" }} />
            </Link>
            <Link ml="15px" href="https://github.com/CutieCat6778/moddy-djs">
              <Image boxSize={{ base: "20px", sm: "30px" }} src="https://cutiecat6778.github.io/cdn/github.png" alt="Github logo" />
            </Link>
          </Flex>
        </Box>
        <Flex justifyContent={{ base: "center", sm: "left" }}>
          <Image ml={{base: "0px", sm:"30px"}} boxSize={"170px"} src="https://cutiecat6778.github.io/cdn/weather/day/116.png" />
        </Flex>
      </Flex>
      <Flex flexDir={{ base: "column-reverse", sm: "row" }} >
        <Flex justifyContent={{ base: "center", sm: "left" }}>
          <Image mr={{base: "0px", sm:"30px"}} boxSize={"170px"} src="https://github.com/CutieCat6778/cdn/blob/master/noobs-logo.png?raw=true" />
        </Flex>
        <Box>
          <Heading d="inline-block">
            Noobs
          </Heading><Tag ml="15px" fontSize={"1xl"} colorScheme={"orange"} variant={"solid"}>17. January 2021</Tag>
          <Text fontSize={"1xl"}>(bot, analistic website)</Text>
          <Text maxW="550px">
            It is a project to support a discord community on discord
            We are vietnamese and we love to meet people, welcome to noobs!!
          </Text>
          <Flex mt="20px" justifyContent="center">
            <Link href="https://discord.gg/UepWd7csWV">
              <ExternalLinkIcon boxSize={{ base: "20px", sm: "30px" }} />
            </Link>
            <Link ml="15px" href="https://frontend-reactjs.vercel.app">
              <LinkIcon boxSize={{ base: "15px", sm: "25px" }} />
            </Link>
            <Link ml="15px" href="https://github.com/CutieCat6778/bot_discordjs">
              <Image boxSize={{ base: "20px", sm: "30px" }} src="https://cutiecat6778.github.io/cdn/github.png" alt="Github logo" />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  )
}