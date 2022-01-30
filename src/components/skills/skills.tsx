import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Scroll } from "../../interface/state";
import { HeaderMotion } from "./header.motion.skills";
import { SectionMotion } from "./section.motion.skills";

export const Skills: FC<Scroll> = ({y}) => {
  return(
    <Box mt="75px" id="skills" minH="500px">
      <HeaderMotion y={y}/>
      <SectionMotion y={y}/>
    </Box>
  )
}