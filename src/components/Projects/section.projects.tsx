import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { MentionConverter } from "./mentionConverter.projects";
import { Moddy } from "./moddy.projects";
import { Noobs } from "./noobs.projects";
import { WeatherNOW } from "./weatherNow.projects";

export function SectionProjects() {
  return (
    <Flex justifyContent="center" alignItems={"center"}>
      <Grid templateColumns={{ base: 'repeat(1, 2fr)', md: 'repeat(2, 2fr)' }} id="projects">
        <GridItem>
          <Moddy />
        </GridItem>
        <GridItem ml={{base: 0, md: "30px"}} mt={{ base: "30px", md: 0 }}>
          <MentionConverter />
        </GridItem>
        <GridItem mt={{ base: 0, md: "30px" }}>
          <WeatherNOW />
        </GridItem>
        <GridItem ml={{base: 0, md: "30px"}} mt={"30px"}>
          <Noobs />
        </GridItem>
      </Grid>
    </Flex>
  )
}