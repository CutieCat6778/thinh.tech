import { ChakraProps, ComponentWithAs, forwardRef, Heading } from "@chakra-ui/react"
import { motion, MotionProps } from "framer-motion";
import React from "react"

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
    MotionProps & {
        as?: React.ElementType;
    };

export const MotionBox = motion(
    forwardRef<ChakraProps, "div">((props, ref) => {
        return (
            <Heading ref={ref} {...props}>2022 © Thinh Nguyen</Heading>
        );
    })
) as ComponentWithAs<"div", MotionBoxProps>;

export default function Footer() {
    return (
        <MotionBox
            initial={{
                rotate: -90
            }}
            height="2rem"
            width={"max-content"}
            fontSize="2xl"
            position={"absolute"}
            right="-6.5%"
            bottom={"15%"}
            display={{base: "none", "2xl": "block"}}
        />
    )
}