import { Box, Heading } from "@chakra-ui/react";
import { SectionEducation } from "./section/_section_education";
import { SectionSkill } from "./section/_section_skill";

export function Section() {
  return (
    <Box>
      <Box>
        <Heading mb="20px" fontWeight={800} textAlign={"center"} fontFamily={"Space Mono"}>Personal Skills</Heading>
        <SectionSkill/>
        <Heading marginY="20px" fontWeight={800} textAlign={"center"} fontFamily={"Space Mono"}>Education</Heading>
        <SectionEducation/>
      </Box>
    </Box>
  )
}