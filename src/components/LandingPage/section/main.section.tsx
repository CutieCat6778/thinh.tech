import { Flex } from "@chakra-ui/react"
import React from "react"
import About from "./about.section"
import Skills from "./skills.section";

export default function SectionBox() {
    return (
        <Flex my="10rem" width="100%" flexDir={"column"}>
            <About />
            <Skills />
        </Flex>
    )
}