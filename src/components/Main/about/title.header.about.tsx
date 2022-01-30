import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Box,
  Heading,
} from "@chakra-ui/react";
import {
  motion,
  MotionProps,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { GenId } from "../../../utils/tools";
import { NewText } from "../../Text";

const arrays = "About me".split("");
const Items = arrays.map((a) => (
  <NewText text={a} key={`${arrays.indexOf(a)}-${GenId()}-sec`} />
));

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <Heading fontSize={"5xl"} fontFamily={"Space Mono"}>
          {Items}
        </Heading>
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function HeaderText() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  return (
    <MotionBox
      animate={{ x: [-100, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
      style={{ x, opacity }}
      _hover={{
        marginTop: "-20px",
        transition: "margin 2s",
      }}
    />
  );
}
