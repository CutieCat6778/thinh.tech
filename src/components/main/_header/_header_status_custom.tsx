import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ResUserPresence } from "../../../interface/user";

const HeaderStatusBoxCustom: React.FC<ResUserPresence | null> = ({ data }) => {
  return (
    <Flex>
      <Image boxSize={{base: "40px", lg:"50px"}} src="https://cutiecat6778.github.io/cdn/discord-icon.png" />
      <Box ml="10px" color="black">
        <Text size="lg" color={"gray.700"}>
          Curent status
        </Text>
        <Heading>
          {data.emoji ? data.emoji.name : null} {data.state}
        </Heading>
      </Box>
    </Flex>
  )
}

export default HeaderStatusBoxCustom;