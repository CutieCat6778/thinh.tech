import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, transition } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FramerBox from "../../components/framerbox";
import { ResolveImage } from "../../utils/utils";

export default function Header() {
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);

  const rootRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, root: rootRef });

  useEffect(() => {
    function handleResize(height: number, width: number) {
      // Set window width/height to state
      setWidth(width);
      setHeight(height + 50);
    }
    // Call handler right away so state gets updated with initial window size
    handleResize(window.innerHeight, window.innerWidth);
  });

  return (
    <Box width="100%" height={height} color="white">
      <Box position="absolute" zIndex={-1} height="100%" width={"auto"}>
        <Image
          src={ResolveImage(
            `v2/backgrounds/${Math.round(Math.random() * 4)}.jpg`,
            width,
            height
          )}
          width={width}
          height={height}
          alt="Banner image"
          objectFit="cover"
          objectPosition={"0 20%"}
        />
      </Box>
      <Flex
        zIndex={600}
        width={"100%"}
        height="100%"
        justifyContent={"space-between"}
        paddingY="1rem"
        alignItems="center"
        flexDir={"column"}
      >
        <Text opacity={0}>Placeholder</Text>
        <Heading textAlign="center">
          <FramerBox
            animate={{
              x: [-100, 0],
              opacity: [0, 1],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Text fontFamily={"Pt Serif"} fontStyle="italic" fontSize={"md"}>
              Hi there, I&apos;m
            </Text>
          </FramerBox>
          <FramerBox
            animate={{
              x: [100, 0],
              opacity: [0, 1],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            Thinh Nguyen
          </FramerBox>
        </Heading>
        <FramerBox
          ref={rootRef}
          animate={
            isInView
              ? {
                  scale: [1, 2, 2, 1, 1],
                  y: [
                    0, -5, -10, -15, -20, -20, -15, -20, -20, -15, -10, -5, 0,
                    5, 10, 10, 5, 0,
                  ],
                }
              : ""
          }
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          mb="3rem"
        >
          <TriangleDownIcon ref={ref} />
        </FramerBox>
      </Flex>
    </Box>
  );
}
