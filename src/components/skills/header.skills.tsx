import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { GenId } from "../../utils/tools";
import { NewText } from "../Text";

export function HeaderSkill(){
  const arrays = "Personal Skills".split("")
  const Items = arrays.map(a => <NewText text={a} key={`${arrays.indexOf(a)}-${GenId()}-skill`}/>)

  return(
    <Box>
      <Flex minH={"100px"} minW="200px" alignItems={"center"}>
        <Heading fontSize={"5xl"} fontFamily={"Space Mono"} >{Items}</Heading>
      </Flex>
      <Divider mb="25px" marginTop={"15px"}/>
    </Box>
  )
}
