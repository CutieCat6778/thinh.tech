import { Box, Heading, useColorMode } from "@chakra-ui/react"
import React from "react"

export default function Background() {
    const { colorMode } = useColorMode();

    return (
        <Box>
            <Heading
                display={{ base: "none", md: "block" }}
                opacity={(colorMode == "light" ? "30%" : "20%")} zIndex={-1} bottom={{ base: "10%", md: "26%" }} textAlign={"left"} position={"absolute"} left={{ base: "25%", md: "10%" }} fontFamily="Bebas Neue" fontSize={{ base: "15vw", md: "10vw" }}>
                WEB<br />
                DEVELOPER
            </Heading>
            <Heading
                display={{ base: "none", md: "block" }}
                opacity={(colorMode == "light" ? "30%" : "20%")} zIndex={-1} top={{ base: "2%", md: "3%" }} textAlign={"right"} position={"absolute"} right={{ base: "25%", md: "20%" }} fontFamily="Bebas Neue" fontSize={{ base: "15vw", md: "10vw" }}>
                Hobbist
            </Heading>
            <Heading
                display={{ base: "none", md: "block" }}
                opacity={(colorMode == "light" ? "30%" : "20%")} zIndex={-1} bottom={{ base: "2%", md: "3%" }} textAlign={"right"} position={"absolute"} right={{ base: "25%", md: "20%" }} fontFamily="Bebas Neue" fontSize={{ base: "15vw", md: "10vw" }}>
                STUDENT
            </Heading>
        </Box>

    )
}