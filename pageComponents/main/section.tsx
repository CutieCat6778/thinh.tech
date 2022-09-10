import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, RefObject, useRef } from "react";
import FramerBox from "../../components/framerbox";
import { ResolveImage } from "../../utils/utils";

export default function Section() {
  const rootRef = useRef(null);

  return (
    <Box width={"100%"} mt="5vw" ref={rootRef}>
      <IntroBox rootRef={rootRef} />
    </Box>
  );
}

interface IntroBoxType {
  rootRef: RefObject<Element>;
}

const IntroBox: FC<IntroBoxType> = ({ rootRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, root: rootRef });

  return (
    <FramerBox
      ref={ref}
      animate={
        isInView
          ? {
              x: [-100, 0],
              opacity: [0, 1],
            }
          : ""
      }
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Intro />
    </FramerBox>
  );
};

function Intro() {
  return (
    <Flex width="100%" justifyContent={"center"}>
      <Flex>
        <Image
          style={{
            borderRadius: "100%",
          }}
          src={ResolveImage("pfp/self_min_1500kb.webp", 300, 300)}
          height="300px"
          width="300px"
          alt="Profile picture"
        />
        <Flex
          maxWidth={"500px"}
          ml="3rem"
          flexDir={"column"}
          alignItems="left"
          justifyContent={"center"}
        >
          <Heading textAlign={"left"}>Thinh Nguyen, Student</Heading>
          <Text
            fontFamily={"Pt Serif"}
            fontWeight="500"
            mt="1rem"
            textAlign={"left"}
          >
            Hi there, this is my personal website. With this website, I can
            introduce my self to you, so you can understand better.
            <Text mt="1rem" fontStyle={"italic"}>
              “Work hard, work hard, and work harder!” <br /> ― Yixing Zhang
            </Text>
            <Box mt="1rem">
              <Heading fontSize="lg">Contact:</Heading>
              <Box py="1rem" width={"50%"}>
                <Button fontFamily={"Comfortaa"}>
                  <Link href="mailto:thinh@thinh.tech">Email</Link>
                </Button>
                <Button fontFamily={"Comfortaa"} ml="1rem">
                  <Link href="https://instagram.com/txzje">Instagram</Link>
                </Button>
              </Box>
            </Box>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
