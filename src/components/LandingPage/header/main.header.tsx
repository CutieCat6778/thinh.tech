import { Box, ChakraProps, ComponentWithAs, Flex, forwardRef, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"
import StatusBox from "./status.header"
import Typist from 'react-typist'
import { motion, MotionProps, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Contact } from "./contact.header"
import Background from "../background/main.background"

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
    MotionProps & {
        as?: React.ElementType;
    };

export const MotionBox = motion(
    forwardRef<ChakraProps, "div">((props, ref) => {
        return (
            <Image ref={ref} {...props} src="https://cutiecat6778.github.io/cdn/pfp/self_min_1500kb.png" borderRadius={{ base: "2%", md: "100%" }} width={{base: "20rem", md: "28vw"}} height={{base: "20rem", md: "28vw"}} alt="Profile picture" />
        );
    })
) as ComponentWithAs<"div", MotionBoxProps>;

export default function Header() {
    const animationControl = useAnimation()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { inView, entry, ref } = useInView();

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

    if(inView){
        animationControl.start({
            x: 0,
            transition: {
                delay: 0.7,
                duration: 1,
            }
        })
    }

    return (
        <Flex justifyContent={"center"} marginX={{base: "1rem", md: "0rem"}} paddingY={{ base: "2rem", md: "5rem" }} marginTop={"5rem"} height="100%" w="100%">
            <Flex justifyContent={{ base: "center", md: "space-around" }} flexDir={{ base: "column-reverse", md: "row" }} width="100%">
                <Box>
                    <Background/>
                    <Typist cursor={{
                        show: false,
                    }}>
                        <Flex
                            mt={"3rem"}
                            alignItems="left"
                            flexDir="column"
                            justifyContent={{ base: "left", md: "center" }}>
                            <Heading>
                                Hi, I&apos;m <Text display={"inline"} color="main.red">Thinh</Text>
                            </Heading>
                            <Text maxW={{base: "18rem", md: "24rem"}} textAlign="left">
                                a programmer, a web developer, currently a student and lives in Germany!
                            </Text>
                        </Flex>
                    </Typist>
                    <Contact/>
                    <StatusBox />
                </Box>
                <Flex
                    justifyContent={{ base: "left", md: "right" }}
                    ref={ref}
                >
                    <MotionBox
                        initial={{
                            x: "10vw"
                        }}
                        animate={animationControl}
                        style={{ x, opacity }}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}