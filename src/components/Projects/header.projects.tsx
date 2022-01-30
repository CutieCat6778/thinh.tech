import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { NewText } from "../Text";

export function HeaderProjects() {
  const arrays = "Projects".split("")
  const Items = arrays.map(a => <NewText text={a} key={`${arrays.indexOf(a)}-prjc`}/>)

  return (
    <Box>
      <Flex minH={"100px"} minW="200px" alignItems={"center"}>
        <Heading fontSize={"5xl"} fontFamily={"Space Mono"} >{Items}</Heading>
      </Flex>
      <Divider mb="50px" marginTop={"15px"} />
    </Box>
  )

}