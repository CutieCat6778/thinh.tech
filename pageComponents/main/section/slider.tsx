import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Posts from "./posts";
import Timeline from "./timeline";
import { ArticleInfo } from "../../../types/article";
import { FC, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import FramerBox from "../../../components/framerbox";

interface IProps {
  posts: ArticleInfo[];
}

interface EProps {
  posts: ArticleInfo[];
  state: number;
}

const Slider: FC<IProps> = ({ posts }) => {
  const maxSlide = 1;
  const [state, setState] = useState(0);
  const [heading, setHeading] = useState("Timeline");

  function ToRight() {
    state <= maxSlide ? (setState(state + 1), setHeading("Blog")) : null;
  }

  function ToLeft() {
    state > 0 ? (setState(state - 1), setHeading("Timeline")) : null;
  }

  return (
    <Box width="100%">
      <Flex
        width="100%"
        justifyContent={"center"}
        px={{ base: "1rem", md: "20vw" }}
        mb="2rem"
      >
        <Flex fontFamily={"Open Sans"} fontWeight="600" alignItems={"center"}>
          <ChevronLeftIcon onClick={ToLeft} fontSize="2xl" />
          <Heading fontSize={"2xl"}>{heading}</Heading>
          <ChevronRightIcon onClick={ToRight} fontSize="2xl" />
        </Flex>
      </Flex>
      <SliderContent posts={posts} state={state} />
    </Box>
  );
};

const SliderContent: FC<EProps> = ({ posts, state }) => {
  const rootRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { root: rootRef, once: true });
  let [inView, setInView] = useState(true);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTrigger(true);
    }, 2000);
    setInView(isInView);
  }, [isInView]);

  switch (state) {
    case 0:
      return (
        <Box width={"100%"}>
          <FramerBox
            ref={ref}
            animate={
              inView && trigger == true
                ? {
                    x: [-100, 0],
                    opacity: [0, 1],
                  }
                : ""
            }
            // @ts-ignore no problem in operation, although type error appears.
            transition={
              inView && trigger == true
                ? {
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                  }
                : ""
            }
          >
            <Timeline />
          </FramerBox>
        </Box>
      );
    case 1:
      return (
        <Box width={"100%"}>
          <FramerBox
            ref={ref}
            animate={
              inView && trigger == true
                ? {
                    x: [-100, 0],
                    opacity: [0, 1],
                  }
                : ""
            }
            // @ts-ignore no problem in operation, although type error appears.
            transition={
              inView && trigger == true
                ? {
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                  }
                : ""
            }
          >
            <Posts posts={posts} />
          </FramerBox>
        </Box>
      );
  }

  return null;
};

export default Slider;
