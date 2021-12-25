import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ResUserPresence } from "../../../interface/user";

const HeaderStatusBox: React.FC<ResUserPresence | null> = ({ data }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Image boxSize={{ base: "40px", lg: "50px" }} alt="Status icon" src={data.image} />
      <Box ml="10px" color="black">
        <Text fontSize={{ base: "sm", lg: "lg" }} color={"gray.700"}>
          Is listening to spotify
        </Text>
        <Heading fontSize={{ base: "1xl", lg: "2xl" }}>
          {data.name}
        </Heading>
      </Box>
    </Flex>
  )
}

export default HeaderStatusBox;