import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}>
        <Image m={"20px"} boxSize={"36"} border={"1px solid black"} src="https://cutiecat6778.github.io/cdn/self_pic/25.jpg" />
        <Box>
          <Heading mb="10px">Introduction</Heading>
          <Text>
            Hobby: Gaming, Programming <br/>
            Birthday: 23. July <br/>
            Current city: <Link href="https://en.wikipedia.org/wiki/Villingen-Schwenningen">Villingen-Schwenningen, Germany</Link> <br/>
            Hometown: <Link href="https://en.wikipedia.org/wiki/H%C3%A0_T%C4%A9nh_province">Ha Tinh, Vietnam</Link> <br/>
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}