import { Heading } from "@chakra-ui/react"
import React from "react"

export default function FooterMobile() {

    return (
        <Heading display={{base: "block", "md": "none"}} mt="2rem" opacity={"50%"} fontSize="2xl" textAlign={"center"}>
            2022 © Thinh Nguyen
        </Heading>
    )

}