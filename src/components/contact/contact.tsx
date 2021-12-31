import { Box, Divider, Heading, Image, Link, Stack } from "@chakra-ui/react";

export function Contact() {
  return (
    <Box mt="100px">
      <Heading fontSize="5xl" textAlign={"center"}>
        Contact
      </Heading>
      <Divider  mb="25px" marginTop={"15px"}/>
      <Stack
        d={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt="75px"
        userSelect={"none"}
        direction={"row"} spacing="15px" m="15px">
        <Link href="https://instagram.com/txzje">
          <Image boxSize={{ base: "40px", lg: "50px" }} src="https://cutiecat6778.github.io/cdn/instagram.png" alt="Instagram logo" />
        </Link>
        <Link href="https://github.com/CutieCat6778">
          <Image boxSize={{ base: "40px", lg: "50px" }} src="https://cutiecat6778.github.io/cdn/github.png" alt="Instagram logo" />
        </Link>
        <Link href="https://www.facebook.com/cat9289/">
          <Image boxSize={{ base: "40px", lg: "50px" }} src="https://cutiecat6778.github.io/cdn/facebook.png" alt="Instagram logo" />
        </Link>
        <Link href="mailto:thinhnguyenhuuhung@gmail.com">
          <Image boxSize={{ base: "40px", lg: "50px" }} src="https://cutiecat6778.github.io/cdn/gmail.png" alt="Instagram logo" />
        </Link>
      </Stack>
    </Box>

  )
}