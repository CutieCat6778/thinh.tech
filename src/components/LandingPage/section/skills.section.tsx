import React, { FC } from "react"
import { Box, ChakraProps, ComponentWithAs, Flex, forwardRef, Heading, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionBoxProps } from "../footer/main.footer";
import { TextLink } from "../../../interfaces/api";
import { LinkIcon } from "@chakra-ui/icons";

export const MotionBox = motion(
    forwardRef<ChakraProps, "div">((props, ref) => {
        return (
            <Box ref={ref} {...props}>
                <SkillsBox />
            </Box>
        );
    })
) as ComponentWithAs<"div", MotionBoxProps>;

export const TextLinkBox: FC<TextLink> = ({ text, url }) => {
    return (
        <Link href={url} alignItems="center">
            <Flex>
                <Text mr="0.5rem">
                    {text}
                </Text>
                <LinkIcon boxSize={"0.8rem"}/>
            </Flex>
        </Link>
    )
}

export function SkillsBox() {
    return (
        <Flex
            mt={"10vw"}
            width={"100%"}
            justifyContent="center"
            alignItems={"center"}
            flexDir="column">
            <Heading>My personal skills</Heading>
            <TableContainer>
                <Table size={"lg"}>
                    <Thead>
                        <Tr>
                            <Th>
                                Programming Languages
                            </Th>
                            <Th>
                                Frameworks & Platforms
                            </Th>
                            <Th>
                                Database
                            </Th>
                            <Th>
                                Foreign Languages
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <TextLinkBox text="Javascript" url="https://javascript.com"/>
                            </Td>
                            <Td>
                                <TextLinkBox text="NestJs" url="https://nestjs.com/"/>
                            </Td>
                            <Td>
                                <TextLinkBox text="MongoDB" url="https://www.mongodb.com/"/>
                            </Td>
                            <Td>
                                German
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <TextLinkBox text="Typescript" url="https://www.typescriptlang.org/"/>
                            </Td>
                            <Td>
                                <TextLinkBox text="NextJS" url="https://nextjs.org/"/>
                            </Td>
                            <Td>
                                <TextLinkBox text="MySQL" url="https://www.mysql.com/"/>
                            </Td>
                            <Td>
                                English
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <TextLinkBox text="HTML" url="https://html.com/"/>
                            </Td>
                            <Td>
                                <TextLinkBox text="ReactJS" url="https://reactjs.org/"/>
                            </Td>
                            <Td>
                                /
                            </Td>
                            <Td>
                                Bulgarian
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <TextLinkBox text="Csharp (C#)" url="https://dotnet.microsoft.com/en-us/languages/csharp"/>
                            </Td>
                            <Td>
                                <TextLinkBox text="Chakra UI" url="https://chakra-ui.com/"/>
                            </Td>
                            <Td>
                                /
                            </Td>
                            <Td>
                                Vietnamese
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default function Skills() {
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