import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Flex,
  Box,
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
      <Flex ref={ref} {...props} fontSize={"6xl"} flexDirection={{base: "column", sm: "row"}}>
        <Box color="white">
          I'm
        </Box>
        <Box ml={{base: "0px", sm: "15px"}}>
          <TypewriterComponent
            options={{
              autoStart: true,
              strings: ["a student", "a developer", "a mathematician", "a human", "a boy", "an idiot"],
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
    <MotionBox
      animate={{ x: [-100, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
      style={{ x, opacity }}
      fontWeight={"900"}
      color={"main.red"}
    />
  )
}