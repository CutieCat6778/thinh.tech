import { Box } from "@chakra-ui/react";
import { HeaderSkill } from "./header.skills";
import { SectionSkill } from "./section.skill";

export function Skills(){
  return(
    <Box mt="75px" id="skills">
      <HeaderSkill/>
      <SectionSkill/>
    </Box>
  )
}