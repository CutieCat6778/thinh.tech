import { Box, Divider, Heading } from "@chakra-ui/react";

export function HeaderAbout(){
  return (
    <Box marginY={"40px"}>
      <Heading fontSize={"5xl"}>
        About
      </Heading>
      <Divider mb="25px" marginTop={"15px"}/>
    </Box>
  )
}