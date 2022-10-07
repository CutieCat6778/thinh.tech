import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ArticleInfo } from "../../types/article";

interface IProps {
  post: ArticleInfo;
}

export default function Header({ post }: IProps) {
  return (
    <Flex flexDir={"column"} width="100%" mb="5rem">
      <Flex width="100%" mb="1rem" justifyContent={"space-between"}>
        <Heading fontSize={"2xl"}>Article — {post.data.length} minute</Heading>
				<Link href="/">
					<Text fontFamily={"Open Sans"} fontWeight="600" fontSize="2xl" textDecor={"underline"}>
						Go back
					</Text>
				</Link>
      </Flex>
      <Heading fontSize={{ base: "4xl", md: "6xl" }}>{post.data.title}</Heading>
      <Text fontFamily={"Open Sans"} fontSize={"2xl"} mt="1rem">
        {post.data.description}
      </Text>
      <Box width={"100%"} opacity="0.6">
        <Divider my="1rem" borderColor={"black"} />
      </Box>
      <Flex width="100%" justifyContent={"space-between"} alignItems="center">
        <Box>
          {post.data.tags.map((a: string, key: number) => {
            return <Tag name={a} key={key}/>
          })}
        </Box>
        <Text fontFamily={"Open Sans"} fontSize="2xl" fontWeight="600">
          Published: {post.data.date}
        </Text>
      </Flex>
    </Flex>
  );
}

interface IEProps {
	name: string
}

export function Tag({name}: IEProps) {
	return (
		<Heading fontSize={"2xl"} display="inline" mr="1rem">
			{name}
		</Heading>
	)
}