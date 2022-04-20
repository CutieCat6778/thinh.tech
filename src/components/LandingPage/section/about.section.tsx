import React from "react"
import { Box, ChakraProps, ComponentWithAs, Flex, forwardRef, Heading, Image, Text } from "@chakra-ui/react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionBoxProps } from "../footer/main.footer";

export const MotionBox = motion(
    forwardRef<ChakraProps, "div">((props, ref) => {
        return (
            <Box ref={ref} {...props}>
                <AboutBox />
            </Box>
        );
    })
) as ComponentWithAs<"div", MotionBoxProps>;

export function AboutBox() {
    return (
        <Flex justifyContent={"space-around"}
            alignItems="center"
            flexDir={{ base: "column", "2md": "row" }}
            width="100%"
            mb="5rem">
            <Flex flexDir={"column"} padding={{base: "1rem", "2md": "3rem"}}>
                <Heading>
                    Story about me
                </Heading>
                <Text mt="4rem" maxW={"28rem"}>
                    Since I was a kid, I&apos;ve been fascinated with technology. I can spend all day just learning about it. As I went to school, my passion for technology gained more momentum, and I am eager to develop my interest further.
                </Text>
            </Flex>
            <Image src={"https://cutiecat6778.github.io/cdn/portfolio/about_2mp.webp"}
                display={{ base: "none", xl: "block" }}
                width="800px"
                height={"500px"}
                alt="Profile picture"
                borderRadius={"3%"}
                boxShadow="2xl"
                loading="lazy"/>
            <Image src={"https://cutiecat6778.github.io/cdn/portfolio/about_600_400.webp"}
                display={{ base: "none", lg: "block", xl: "none" }}
                alt="Profile picture"
                borderRadius={"3%"}
                boxShadow="2xl" 
                width={"600px"}
                loading="lazy"
                height="400px"/>
            <Image src={"https://cutiecat6778.github.io/cdn/portfolio/about_480_320.webp"}
                display={{ base: "none", md: "block", lg: "none" }}
                alt="Profile picture"
                borderRadius={"3%"}
                boxShadow="2xl"
                width={"480px"}
                loading="lazy"
                height={"320px"} />
            <Image src={"https://cutiecat6778.github.io/cdn/portfolio/about_320_233.webp"}
                display={{ base: "block", md: "none"}}
                alt="Profile picture"
                borderRadius={"3%"}
                boxShadow="2xl"
                width={"60vw"}
                minW={"300px"}
                minH={"200px"}
                objectFit="cover"
                loading="lazy"
                height="40vw"/>
        </Flex>
    )
}

export default function About() {
    const animationControl = useAnimation();

    const { inView, ref } = useInView();

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-25, 0, 25], [0, 1, 0]);

    if (inView) {
        animationControl.start({
            x: 0,
            transition: {
                duration: 1,
            }
        })
    }

    return (
        <Box ref={ref} width="100%">
            <MotionBox
                initial={{
                    x: 25
                }}
                animate={animationControl}
                style={{ x, opacity }}
                position={(inView ? "relative" : "absolute")}
                right={(inView ? "initial" : "10%")}
            />
        </Box>
    )
}