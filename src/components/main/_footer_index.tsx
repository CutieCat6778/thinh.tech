import { StarIcon } from "@chakra-ui/icons";
import { Box, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";


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
      <Box ref={ref} {...props}>
        <StarIcon color="main.yellow" 
          boxSize={10} />
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function Footer() {
  return (
    <Stack direction={{base: "row", lg: "column"}} spacing="15px" m="15px">
      <Link to="/projects">
        <MotionBox
          animate={{ rotate: 720 }}
          transition={{ ease: "easeOut", duration: 5 }}
        />
      </Link>
    </Stack>
    
  )
}