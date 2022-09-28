import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ArticleMeta } from "../types/article";

interface IProps {
  article: ArticleMeta;
}

const Card: FunctionComponent<IProps> = ({ article }) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <Box width={"400px"} height="100%" borderRadius={"10px"}>
        <Box>
          <Heading>{article.title}</Heading>
          <Text fontFamily={"Open Sans"}>{article.description}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
