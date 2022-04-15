import {
    Icon,
    Link,
    Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaInstagramSquare, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export function Contact() {
    return (
        <Stack
            d={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            userSelect={"none"}
            direction={"row"}
            spacing="15px"
            mt={"1rem"}
        >
            <Link href="https://instagram.com/txzje">
                <Icon as={FaInstagramSquare} boxSize={{ base: "40px", lg: "50px" }} />
            </Link>
            <Link href="https://github.com/CutieCat6778">
                <Icon as={FaGithubSquare} boxSize={{ base: "40px", lg: "50px" }} />
            </Link>
            <Link href="https://www.facebook.com/cat9289/">
                <Icon as={FaFacebookSquare} boxSize={{ base: "40px", lg: "50px" }} />
            </Link>
            <Link href="mailto:thinhnguyenhuuhung@gmail.com">
                <Icon as={RiMailFill} boxSize={{ base: "45px", lg: "55px" }} />
            </Link>
        </Stack>
    );
}