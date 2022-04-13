import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/LandingPage/header/main.header";
import Nav from "../components/LandingPage/nav/main.nav";

export default function LandingPage() {
    return (
        <Flex justifyContent={"center"} flexDir="column">
            <Nav />
            <Header />
        </Flex>
    )
}