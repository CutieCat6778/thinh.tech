import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Scroll } from "../../interface/state";
import { HeaderMotion } from "./header.motion.projects";
import { SectionMotion } from "./section.motion.projects";

export const Projects: FC<Scroll> = ({y}) => {
  return(
    <Box mt="75px" id="projects" minH="800px">
      <HeaderMotion y={y}/>
      <SectionMotion y={y}/>
    </Box>
  )
}