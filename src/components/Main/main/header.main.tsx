import { Flex, Heading } from "@chakra-ui/react";
import TypeWriter from "typewriter-effect";
import { HeaderButton } from "./header/button.header.main";
import { HeaderText } from "./header/text.header.main";

export function Header() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"left"}
      minH="300px"
      height={"720px"}
      flexDir={"column"}
    >
      <Heading
        ml="20px"
        fontFamily={"Space Mono"}
        minW="250px"
        fontSize={{ base: "5xl", sm: "6xl", "2xl": "7xl" }}
        textAlign={"left"}
        minH="300px"
        _hover={{
          "color": "main.red",
          "transition": "color 2s",
        }}
      >
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi,<br/>I'm Thinh,<br/>web developer")
              .start();
          }}
        />
      </Heading>
      <HeaderText/>
      <Flex justifyContent={"left"} marginLeft={"50px"}>
        <HeaderButton/>
      </Flex>
    </Flex>
  );
}
