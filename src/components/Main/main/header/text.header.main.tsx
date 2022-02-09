import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  motion,
  MotionProps,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { Contact } from "../../contact/contact";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <Text
          marginLeft={"30px"}
          mb="30px"
          fontSize="2xl"
          fontFamily={"Space Mono"}
          color="gray.500"
          _hover={{
            fontSize: "3xl",
            transition: "font-size 2s",
          }}
        >
          FULL STACK WEB DEVELOPER
        </Text>
        <Contact/>
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function HeaderText() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const [loaded, setLoaded] = useState<boolean>(false);

  setTimeout(() => setLoaded(true), 1000);

  if (loaded) {
    return (
      <MotionBox
        animate={{ x: [100, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}
        style={{ x, opacity }}
        _hover={{
          "marginTop": "-20px",
          transition: "margin 2s",
        }}
      />
    );
  } else return null;
}
