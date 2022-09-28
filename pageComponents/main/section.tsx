import { Divider, Flex } from "@chakra-ui/react";
import { ArticleMeta } from "../../types/article";
import IntroBox from "./section/intro";
import Slider from "./section/slider";
import { FC } from "react";

interface Props {
  articles: ArticleMeta[];
}

const Section: FC<Props> = ({ articles }) => {
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
      <Divider my="4vw" />
      <Slider articles={articles}/>
    </Flex>
  );
};

export default Section;
