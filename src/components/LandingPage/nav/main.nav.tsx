import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Icon, useColorMode } from "@chakra-ui/react"
import React from "react"
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
                    { colorMode === "light" ? <MoonIcon boxSize="2rem"/> :<SunIcon boxSize="2rem"/>}
                </Box>
                <Heading fontSize={"3xl"}>
                    Portfolio
                </Heading>
            </Flex>
            <AsideMobile/>
        </Flex>
    )
}