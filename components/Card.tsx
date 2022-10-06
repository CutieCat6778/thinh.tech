import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ArticleInfo } from "../types/article";

interface IProps {
  posts: ArticleInfo;
}

const Card: FunctionComponent<IProps> = ({ posts }) => {
  return (
    <Link href={`/posts/${posts.slug}`}>
      <Box width={"400px"} height="100%" borderRadius={"10px"}>
        <Box>
          <Heading>{posts.data.title}</Heading>
          <Text fontFamily={"Open Sans"}>{posts.data.description}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
