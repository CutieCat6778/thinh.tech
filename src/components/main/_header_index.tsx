import { Flex } from "@chakra-ui/layout"
import { HeaderStatus } from "./_header/_header_status"
import { HeaderTitle } from "./_header/_header_title"

export function HeaderIndex() {
  return (
    <Flex 
      flexDir={"column"} 
      alignItems={"center"} 
      justifyContent={"center"}
      // backgroundColor={"black"}
      // boxShadow={"dark-lg"}
      // p={"30px"}
      // borderRadius={"2xl"}
      >
      <HeaderTitle/>
      <HeaderStatus/>
    </Flex>
  )
}