import { Box, Button, Flex, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";

export function WeatherNOW() {
  return (
    <Flex maxW="400px" borderRadius={"12px"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
      <Image borderRadius={"17px"} src="https://cutiecat6778.github.io/cdn/weather.png" alt="Weather Logo" />
      <Box mr="auto" mt="28px">
        <Heading fontSize="3xl">
          WeatherNOW
        </Heading>
        <Text maxW="300px" textAlign={"left"} fontSize={"20px"}>
          A website that take gps location to display current weather.
        </Text>
      </Box>
      <Stack direction={"row"} mt="10px">
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #weather
        </Tag>
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #api
        </Tag>
        <Tag fontSize={"1xl"} colorScheme={"gray"} letterSpacing={"1.3px"}>
          #website
        </Tag>
      </Stack>
      <Flex mt="10px">
        <Button width={"145px"} paddingX="30px" ml="10px">
          <Link _hover={{
            textDecoration: "none"
          }} href="https://github.com/CutieCat6778/WeatherNOW">
            Github
          </Link>
        </Button>
      </Flex>
    </Flex>
  )
}