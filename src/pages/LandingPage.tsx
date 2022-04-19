import { Flex } from "@chakra-ui/react";
import React from "react";
import Aside from "../components/LandingPage/aside/main.aside";
import Footer from "../components/LandingPage/footer/main.footer";
import FooterMobile from "../components/LandingPage/footer/mobile.footer";
import Header from "../components/LandingPage/header/main.header";
import Nav from "../components/LandingPage/nav/main.nav";
import Section from "../components/LandingPage/section/main.section";

export default function LandingPage() {
    return (
        <Flex justifyContent={"center"} flexDir="column" width={"100%"} height="100%">
            <Nav />
            <Flex justifyContent={{base: "center", md: "space-between"}} alignItems="center" flexDir={{ base: "column", md: "row" }}>
                <Aside />
                <Header />
                <Footer />
            </Flex>
            <Section/>
            <FooterMobile/>
        </Flex>
    )
}