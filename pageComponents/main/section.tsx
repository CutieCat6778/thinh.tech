import { Divider, Flex } from "@chakra-ui/react";
import IntroBox from "./section/intro";
import Timeline from "./section/timeline";

export default function Section() {
  return (
    <Flex width={"100%"} mt="5vw" justifyContent={"center"} flexDir="column" alignItems={"center"} >
      <IntroBox />
      <Divider color={"black"} display="block" my="4vw" width={"40%"} />
      <Timeline/>
    </Flex>
  );
}

