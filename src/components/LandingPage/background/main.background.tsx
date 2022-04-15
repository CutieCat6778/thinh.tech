import { Heading } from "@chakra-ui/react"
import React from "react"

export default function Background() {
    return (
        <Heading 
        display={{base: "none", "md": "block"}}
        opacity={"20%"} zIndex={-1} textAlign="left" position={"absolute"} left={"12.5%"} fontFamily="Bebas Neue" fontSize={"10vw"}>
            WEB<br/>
            DEVELOPER
        </Heading>
    )
}