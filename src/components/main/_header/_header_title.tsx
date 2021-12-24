import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Flex,
  Box,
} from "@chakra-ui/react";
import { motion, MotionProps, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
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
          I'm a
        </Box>
        <Box ml={{base: "0px", sm: "15px"}}>
          <TypewriterComponent
            options={{
              autoStart: true,
              strings: ["student", "developer", "mathematician", "human", "boy", "idiot"],
              loop: true,
            }}
          />
        </Box>
      </Flex>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function HeaderTitle() {
  const [color, setColor] = useState<string | null>();

  let i = 0;

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  useEffect(() => {
    const colors = ["main.red", "main.yellow", "main.pink", "main.cyan"];
    setInterval(() => {
      setColor(colors[i]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      i === 4 ? i = 0 : i++;
    }, 4000)
  }, [i])

  return (
    <MotionBox
      animate={{ x: [-100, 0] }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      style={{ x, opacity }}
      fontWeight={"900"}
      color={color ? color : "white"}
    />
  )
}