import { Box } from "@chakra-ui/react";
import { HeaderProjects } from "./header.projects";
import { SectionProjects } from "./section.projects";

export function Projects(){
  return(
    <Box mt="75px" id="projects">
      <HeaderProjects/>
      <SectionProjects/>
    </Box>
  )
}