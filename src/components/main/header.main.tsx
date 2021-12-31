import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import TypeWriter from 'typewriter-effect';
import { HeaderStatus } from "./header/status.header.main";

export function Header() {
  return (
    <Flex justifyContent={"space-around"} alignItems={"center"} minH="300px" flexDir={{base: "column", md: "row-reverse"}}>
      <Image m={"20px"} boxSize={"36"} border={"1px solid black"} src="https://cutiecat6778.github.io/cdn/pfp/pfp_25.jpg" />
      <Stack spacing={"20px"}>
        <Heading ml="20px" fontFamily={"Space Mono"}  minW="250px" textAlign={"center"}>
          <TypeWriter
            options={{
              autoStart: true,
              strings: ['Thinh', 'Txzje', 'Developer', 'Student', 'Son', 'Child', 'Citizen'],
              loop: true,
            }}
          />
        </Heading>
        <HeaderStatus/>
      </Stack>
    </Flex>
  )
}