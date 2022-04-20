import {
    Icon,
    Link,
    Stack,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Instagram, Github, Facebook, Mail } from "./icons.header";

export function Contact() {
    const { colorMode } = useColorMode();

    console.log(colorMode);

    return (
        <Stack
            d={"flex"}
            justifyContent={{base: "center", md: "left"}}
            alignItems={"center"}
            userSelect={"none"}
            direction={"row"}
            spacing="15px"
            mt={"1rem"}
        >
            <Link href="https://instagram.com/txzje">
                <Text display={"none"}>
                    A
                </Text>
                <Icon as={Instagram} boxSize={{ base: "40px", lg: "50px" }}/>
            </Link>
            <Link href="https://github.com/CutieCat6778">
                <Text display={"none"}>
                    A
                </Text>
                <Icon as={Github} boxSize={{ base: "40px", lg: "50px" }}/>
            </Link>
            <Link href="https://www.facebook.com/cat9289/">
                <Text display={"none"}>
                    A
                </Text>
                <Icon as={Facebook} boxSize={{ base: "40px", lg: "50px" }}/>
            </Link>
            <Link href="mailto:thinhnguyenhuuhung@gmail.com">
                <Text display={"none"}>
                    A
                </Text>
                <Icon as={Mail} boxSize={{ base: "45px", lg: "55px" }}/>
            </Link>
        </Stack>
    );
}