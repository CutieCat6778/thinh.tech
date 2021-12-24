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

export function FooterMobile() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  return (
    <MotionBox
      animate={{ x: [-100, 0], rotate: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      style={{x, opacity}}
      fontWeight={"900"}
      color={"white"}
      d={{base: "block", lg: "none"}}
      mb="15px"
      fontSize={"2xl"}
    />
  )
}