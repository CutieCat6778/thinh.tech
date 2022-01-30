import { Box, Divider, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Scroll } from "../../../interface/state";
import { HeaderText } from "./title.header.about";

export const HeaderAbout: FC<Scroll> = ({y}) => {
  return (
    <Box marginY={"40px"}>
      <Flex minH={"100px"} minW="200px" alignItems={"center"}>
        {y > 70 ? <HeaderText /> : null}
      </Flex>
      <Divider mb="25px" marginTop={"15px"} />
    </Box>
  );
}
