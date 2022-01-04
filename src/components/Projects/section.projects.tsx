import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { MentionConverter } from "./mentionConverter.projects";
import { Moddy } from "./moddy.projects";
import { Noobs } from "./noobs.projects";
import { WeatherNOW } from "./weatherNow.projects";

export function SectionProjects() {
  return (
    <Flex justifyContent="center" alignItems={"center"}>
      <Grid templateColumns={{ base: 'repeat(1, 2fr)', "2sm": 'repeat(2, 3fr)' }} id="projects">
        <GridItem>
          <Moddy />
        </GridItem>
        <GridItem ml={{base: 0, "2sm": "50px"}} mt={{ base: "50px", "2sm": 0 }}>
          <MentionConverter />
        </GridItem>
        <GridItem mt={"50px"}>
          <WeatherNOW />
        </GridItem>
        <GridItem mt={"50px"}>
          <Noobs />
        </GridItem>
      </Grid>
    </Flex>
  )
}