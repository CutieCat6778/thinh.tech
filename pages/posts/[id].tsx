import { Box, Flex } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import { ArticleInfo } from "../../types/article";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { mdxComponents } from "../../components/MDX";

interface SlugPageProps {
  slug?: string;
  encodedSlug?: string;
  post: ArticleInfo;
}

const ArticleBySlug: NextPage<SlugPageProps> = ({ slug, encodedSlug, post }) => {
  return (
    <Flex alignItems={"center"} width="100%" flexDir={"column"} backgroundColor="white" height={"100%"}>
      <MDXRemote {...post.content as MDXRemoteSerializeResult} components={mdxComponents} />
    </Flex>
  );
};

export default ArticleBySlug;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.params?.id!;

  const res = await fetch('https://www.thinh.tech/api/get-post?id='+slug)

  const post = await res.json();
  post.content = await serialize(post.content);

  return {
    props: {
      slug,
      post
    },
  };
}
