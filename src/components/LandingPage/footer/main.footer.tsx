import { ChakraProps, ComponentWithAs, forwardRef, Heading, useColorMode } from "@chakra-ui/react"
import { motion, MotionProps } from "framer-motion";
import React from "react"

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
    MotionProps & {
        as?: React.ElementType;
    };

export const MotionBox = motion(
    forwardRef<ChakraProps, "div">((props, ref) => {
        return (
            <Heading ref={ref} {...props}>2022 © THINH NGUYEN</Heading>
        );
    })
) as ComponentWithAs<"div", MotionBoxProps>;

export default function Footer() {

    const { colorMode } = useColorMode();
    
    return (
        <MotionBox
            initial={{
                rotate: 90
            }}
            height="2rem"
            width={"max-content"}
            fontSize="2xl"
            position={"absolute"}
            bottom={"50%"}
            right={"-5%"}
            zIndex={-1}
            opacity={(colorMode == "light" ? "30%" : "20%")}
            display={{base: "none", "md": "block"}}
        />
    )
}