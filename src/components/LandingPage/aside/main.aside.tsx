import { Flex, Icon } from "@chakra-ui/react"
import React from "react"
import { BsSpotify } from "react-icons/bs"

export default function Aside() {
    return (
        <Flex alignItems={"end"} ml="1rem" display={{base: "none", md: "flex"}}>
            <Icon as={BsSpotify} boxSize={"2rem"}/>
        </Flex>
    )
}