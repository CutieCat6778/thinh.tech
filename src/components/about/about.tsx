import { Box } from "@chakra-ui/react";
import { HeaderAbout } from "./header.about";
import { SectionAbout } from "./section.about";

export function About(){
  return (
    <Box id="about">
      <HeaderAbout/>
      <SectionAbout/>
    </Box>
  )
}