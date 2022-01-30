import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  motion,
  MotionProps,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <Button
          variant={"outline"}
          border={"2px solid #000000"}
          p={"20px 50px"}
          fontFamily={"Space Mono"}
        >
          CONTACT ME
        </Button>
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function HeaderButton() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const [loaded, setLoaded] = useState<boolean>(false);

  setTimeout(() => setLoaded(true), 1000);

  if (loaded) {
    return (
      <MotionBox
        animate={{ x: [-100, 0] }}
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
