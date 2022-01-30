import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Scroll } from "../../../interface/state";
import { HeaderAbout } from "./header.about";
import { SectionAbout } from "./section.about";

export const About: FC<Scroll> = ({y}) => {
  return (
    <Box id="about">
      <HeaderAbout y={y}/>
      <SectionAbout y={y}/>
    </Box>
  )
}