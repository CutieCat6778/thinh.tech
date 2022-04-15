import { Flex, Icon } from "@chakra-ui/react"
import React from "react"
import { BsSpotify } from "react-icons/bs"

export default function AsideMobile() {
    return (
        <Flex alignItems={"end"} display={{base: "flex", md: "none"}}>
            <Icon as={BsSpotify} boxSize={"2rem"}/>
        </Flex>
    )
}