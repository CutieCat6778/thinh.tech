import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FC, Key } from "react";
import Card from "../../../components/Card";
import { ArticleMeta } from "../../../types/article";

interface IProps {
  articles: ArticleMeta[];
}

const Posts: FC<IProps> = ({ articles }) => {
  console.log(articles);

  return (
    <Box width="100%" px={{base: 0, md: "25vw"}}>
			<Flex mb="1rem" justifyContent={"space-between"}>
				<Heading fontSize="sm" color="#444">
					{articles.length} posts
				</Heading>
				<Heading fontSize="sm" color="#444">
					<Link href="https://github.com/CutieCat6778/my_profile">
						See github repo
					</Link>
				</Heading>
			</Flex>
      {articles
        ? articles.map((articles: ArticleMeta, i: Key | null | undefined) => (
            <Card key={i} article={articles} />
          ))
        : null}
    </Box>
  );
};

export default Posts;
