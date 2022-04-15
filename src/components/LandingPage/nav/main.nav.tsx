import { Box, Flex, Heading, Icon, useColorMode } from "@chakra-ui/react"
import React from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import AsideMobile from "../aside/mobile.aside";

export default function Nav() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            flexDir={"row"}
            justifyContent={{base: "space-between", md: "left"}}
            fontFamily="comfortaa"
            alignItems={"center"}
            margin={"1rem"}
            fontSize="1.5rem"
        >
            <Flex alignItems={"center"}>
                <Box onClick={() => {
                    toggleColorMode()
                }} mr="2rem">
                    { colorMode === "light" ? <Icon as={MdLightMode} boxSize="2rem"/> :<Icon as={MdDarkMode} boxSize="2rem"/>}
                </Box>
                <Heading fontSize={"3xl"}>
                    Portfolio
                </Heading>
            </Flex>
            <AsideMobile/>
        </Flex>
    )
}