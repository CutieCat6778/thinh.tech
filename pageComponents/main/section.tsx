import { Box, Divider, Flex } from "@chakra-ui/react";
import { ArticleInfo } from "../../types/article";
import IntroBox from "./section/intro";
import Slider from "./section/slider";
import { FC } from "react";

interface Props {
  posts: ArticleInfo[];
}

const Section: FC<Props> = ({ posts }) => {
  return (
    <Flex
      width={"100%"}
      pt="5vw"
      justifyContent={"center"}
      flexDir="column"
      alignItems={"center"}
      backgroundColor="white"
    >
      <IntroBox />
      <Box width={"40%"} opacity="0.6">
        <Divider my="4vw" borderColor={"black"} />
      </Box>
      <Slider posts={posts}/>
    </Flex>
  );
};

export default Section;
