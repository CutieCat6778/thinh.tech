import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"
import StatusBox from "./status.header"

export default function Header() {
    return (
        <Flex justifyContent={"center"} padding={{base: "2rem", md: "5rem"}} marginTop={"5rem"}>
            <Flex justifyContent={{base: "center", md: "space-around"}} flexDir={{base: "column-reverse", md: "row"}} width="100%">
                <Flex 
                    mt={"3rem"}
                    alignItems={{base: "center", md: "left"}}
                    flexDir="column" 
                    justifyContent={{base: "left", md: "center"}}>
                    <Heading>
                        Hi, I&apos;m <Text display={"inline"} color="main.red">Thinh</Text>
                    </Heading>
                    <Text maxW={"24rem"} textAlign="center">
                        a programmer, a web developer, currently a student and lives in Germany!
                    </Text>
                    <StatusBox/>
                </Flex>
                <Flex 
                    justifyContent={{base: "center", md: "right"}} 
                    >
                    <Image src="https://cutiecat6778.github.io/cdn/pfp/self_min_1500kb.png" borderRadius={{base: "2%", md: "100%"}} width="28vw" height={"28vw"} alt="Profile picture"/>
                </Flex>
            </Flex>
        </Flex>
    )
}