import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  motion,
  MotionProps,
  useMotionValue,
  useTransform,
} from "framer-motion";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <Stack
          fontSize={{ base: "1xl", "2sm": "2xl" }}
          fontFamily={"Space Mono"}
          spacing="10px"
        >
          <Text>
            Since I was a small child, I dreamt to a future that I will be a
            computer specialist. Worked very hard to achieve my goals. I've been
            passionate about computer scientist.
          </Text>
          <Text>
            For my whole stundent life, I learnt and tried many web technologies
            what let me gather a significant amount of various experience.
            Working for myself, collabrating with others peoples around the
            globe I met and learnt from amazing and ambitious people.
          </Text>
          <Text>
            I'm currently learning about computer science and improve myself
            everyday, looking for a collabration projects and improve my
            knowledges.
          </Text>
        </Stack>
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function SectionText() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <MotionBox
      animate={{ x: [100, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
      style={{ x, opacity }}
      _hover={{
        marginTop: "-20px",
        transition: "margin 2s",
      }}
    />
  );
}
