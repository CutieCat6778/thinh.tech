import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FC, Key } from "react";
import Card from "../../../components/Card";
import { ArticleInfo } from "../../../types/article";

interface IProps {
  posts: ArticleInfo[];
}

const Posts: FC<IProps> = ({ posts }) => {
  return (
    <Box width="100%" px={{base: 0, md: "25vw"}}>
			<Flex mb="1rem" justifyContent={"space-between"}>
				<Heading fontSize="sm" color="#444">
					{posts.length} posts
				</Heading>
				<Heading fontSize="sm" color="#444">
					<Link href="https://github.com/CutieCat6778/my_profile">
						See github repo
					</Link>
				</Heading>
			</Flex>
      {posts
        ? posts.map((post: ArticleInfo, i: Key | null | undefined) => (
            <Card key={i} posts={post} />
          ))
        : null}
    </Box>
  );
};

export default Posts;
