import { Box, Flex, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

export default function Nav() {
    const [select, setSelect] = useState<string | null>(null);

    useEffect(() => {
        if (!select) return setSelect("home");
    }, [select])

    return (
        <Flex
            flexDir={"row"}
            justifyContent="space-around"
            paddingX={{base: "2rem", "lg": "4rem", xl: "8rem", "2xl": "16rem"}}
            fontFamily="comfortaa"
            marginTop={"1rem"}
            fontSize="1.5rem"
        >
            <Box>
                <Text
                    _hover={{
                        fontWeight: "600"
                    }}
                    onClick={() => {
                        setSelect("about")
                    }}
                    textDecoration={(select == "about" ? "underline" : "none")}>
                    About
                </Text>
            </Box>
            <Box>
                <Text
                    onClick={() => {
                        setSelect("home")
                    }}
                    textDecoration={(select == "home" ? "underline" : "none")}>
                    Home
                </Text>
            </Box>
            <Box>
                <Text
                    onClick={() => {
                        setSelect("contact")
                    }}
                    textDecoration={(select == "contact" ? "underline" : "none")}>
                    Contact
                </Text>
            </Box>
        </Flex>
    )
}