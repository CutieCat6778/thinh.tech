import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Box,
} from "@chakra-ui/react";
import {
  motion,
  MotionProps,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FC } from "react";
import { Scroll } from "../../interface/state";
import { HeaderProjects } from "./header.projects";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <HeaderProjects/>
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export const HeaderMotion: FC<Scroll> = ({y}) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  if (y > 1400) {
    return (
      <MotionBox
        animate={{ x: [-100, 0] }}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{ x, opacity }}
      />
    );
  } else return null;
}
