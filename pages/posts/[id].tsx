import { Box, Flex } from "@chakra-ui/react";
import { GetStaticPropsContext, NextPage } from "next";
import { ArticleInfo } from "../../types/article";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "../../components/MDX";
import { getPost } from "../../utils/utils";
import Header from "../../pageComponents/posts/header";
interface SlugPageProps {
  post: ArticleInfo;
}

const ArticleBySlug: NextPage<SlugPageProps> = ({
  post,
}) => {
  return (
    <Flex
      alignItems={"center"}
      width="100%"
      flexDir={"column"}
      backgroundColor="white"
      height={"100%"}
      px={{base: "1rem", md: "15vw"}}
      pt="5rem"
    >
      <Header post={post} />
      <Box textAlign={"left"} width="100%">
        <MDXRemote
          {...(post.content as MDXRemoteSerializeResult)}
          components={mdxComponents}
        />
      </Box>      
    </Flex>
  );
};

export default ArticleBySlug;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "demo" } }],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.id!;

  const post: ArticleInfo = await getPost(slug as string);

  if(post) {
    post.content = await serialize(post.content as string);
  }

  return {
    props: {
      post,
    },
  };
}
