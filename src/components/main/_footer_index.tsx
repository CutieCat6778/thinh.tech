import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Heading,
} from "@chakra-ui/react";
import { motion, MotionProps, useMotionValue, useTransform } from "framer-motion";

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
      <Heading ref={ref} {...props}>Thinh Nguyen</Heading>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function Footer() {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0])

  return (
    <MotionBox
      animate={{ x: [0, 75], y: [-100, 0], rotate: -90 }}
      transition={{ ease: "easeOut", duration: 2 }}
      style={{y, opacity}}
      fontWeight={"900"}
      color={"white"}
      d={{base: "none", lg: "block"}}
    />
  )
}