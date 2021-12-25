import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { motion, MotionProps, useMotionValue, useTransform } from "framer-motion";
import TypewriterComponent from "typewriter-effect";


export type MotionBoxProps = Omit<
  ChakraProps,
  keyof MotionProps
> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Flex ref={ref} {...props} flexDirection={"row"}>
        <Box color="black">
          I'm
        </Box>
        <Box ml={"15px"}>
          <TypewriterComponent
            options={{
              autoStart: true,
              strings: ["a student.", "a developer.", "a human.", "a boy.", "an idiot."],
              loop: true,
            }}
          />
        </Box>
      </Flex>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function HeaderTitle() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
      <Heading fontSize={{base: "4xl", "lg": "5xl"}} color="black" fontFamily={"Archivo Black"} fontWeight={100}>
        Thinh Nguyen
      </Heading>
      <MotionBox
        animate={{ x: [-100, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}
        style={{ x, opacity }}
        fontWeight={"100"}
        color={"main.red"}
        fontSize={"2xl"}
        marginY={"16px"}
        fontFamily={"Space Mono"}
      />
    </Flex>
  )
}