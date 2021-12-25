import { Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react";

export function SectionEducation() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-around"}>
      <Stack>
        <Tag w="fit-content">2016-2019</Tag>
        <Heading fontSize={"2xl"}>Sofia Math Gymnasium</Heading>
        <Text>The top 1 school of Bulgaria,<br /> we are mathematician!!</Text>
      </Stack>
      <Stack>
        <Tag w="fit-content">2019</Tag>
        <Heading fontSize="2xl">Bickebergschule</Heading>
        <Text>A normal school in Germany,<br /> making my first steps</Text>
      </Stack>
    </Flex>
  )
}