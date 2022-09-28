import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FramerBox from "../../../components/framerbox";
import { ResolveImage } from "../../../utils/utils";

const IntroBox = () => {
  const [inView, setInView] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTrigger(true);
    }, 500);
    setInView(isInView);
  }, [isInView]);

  if(trigger) {
    return (
    <FramerBox
      ref={ref}
      animate={
        inView
          ? {
              x: [-100, 0],
              opacity: [0, 1],
            }
          : ""
      }
      // @ts-ignore no problem in operation, although type error appears.
      transition={
        inView
          ? {
              delay: 0.2,
              duration: 1,
              ease: "easeInOut",
            }
          : ""
      }
    >
      <Intro />
    </FramerBox>
  )} else return null
};

function Intro() {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      alignItems="center"
      id="intro"
      backgroundColor="white"
    >
      <Box maxH="300px" maxW="300px" mb={{ base: "5vw", lg: "0" }}>
        <Image
          style={{
            borderRadius: "100%",
            maxWidth: "300px",
            maxHeight: "300px",
          }}
          src={ResolveImage("pfp/self_min_1500kb.webp", 300, 300)}
          height="300px"
          width="300px"
          alt="Profile picture"
          objectFit="cover"
        />
      </Box>
      <Flex
        maxWidth={"500px"}
        ml={{ base: 0, lg: "3rem" }}
        flexDir={"column"}
        alignItems={{ base: "center", lg: "left" }}
        justifyContent={"center"}
      >
        <Heading textAlign={{ base: "center", lg: "left" }} width="100%">
          Thinh Nguyen, Germany
        </Heading>
        <Box
          fontFamily={"Pt Serif"}
          fontWeight="500"
          mt="1rem"
          textAlign={{ base: "center", lg: "left" }}
        >
          Hi there, this is my personal website. With this website, I can
          introduce my self to you, so you can understand better.
          <Text mt="1rem" fontStyle={"italic"}>
            “Work hard, work hard, and work harder!” <br /> ― Yixing Zhang
          </Text>
          <Box mt="1rem">
            <Heading fontSize="lg">Contact:</Heading>
            <Flex
              py="1rem"
              width={"100%"}
              justifyContent={{ base: "center", lg: "left" }}
            >
              <Button fontFamily={"Comfortaa"}>
                <Link href="mailto:thinh@thinh.tech">Email</Link>
              </Button>
              <Button fontFamily={"Comfortaa"} ml="1rem">
                <Link href="https://instagram.com/txzje">Instagram</Link>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default IntroBox;
