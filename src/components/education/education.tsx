import { Box } from "@chakra-ui/react";
import { HeaderEducation } from "./header.education";
import { SectionEducation } from "./section.education";

export function Education(){
  return (
    <Box mt="75px" id="education">
      <HeaderEducation/>
      <SectionEducation/>
    </Box>
  )
}