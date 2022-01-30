import { Grid, GridItem, Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

export function SectionSkill() {
  return (
    <Grid templateColumns={{base: 'repeat(2, 1fr)', md:'repeat(3, 1fr)'}} fontFamily={"Open Sans"}>
      <GridItem mt="20px" _hover={{
            marginTop: "10px",
            transition: "margin 0.8s",
          }}>
        <Heading fontSize={{base: "1x", md: "2xl"}}>
          Languages (code)
        </Heading>
        <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}}>
          <ListItem>
            JS, TS
          </ListItem>
          <ListItem>
            HTML, CSS
          </ListItem>
          <ListItem>
            Python, C++
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem mt="20px" _hover={{
            marginTop: "10px",
            transition: "margin 0.8s",
          }}>
        <Heading fontSize={{base: "1x", md: "2xl"}}>
          Frameworks
        </Heading>
        <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}}>
          <ListItem>
            NodeJS
          </ListItem>
          <ListItem>
            ReactJS, ChakraUI
          </ListItem>
          <ListItem>
            Express, NestJS
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem mt="20px" _hover={{
            marginTop: "10px",
            transition: "margin 0.8s",
          }}>
        <Heading fontSize={{base: "1x", md: "2xl"}}>
          Dev-Ops
        </Heading>
        <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}}>
          <ListItem>
            Linux, Bash
          </ListItem>
          <ListItem>
            Kubenetes
          </ListItem>
          <ListItem>
            Docker
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem mt="20px" _hover={{
            marginTop: "10px",
            transition: "margin 0.8s",
          }}>
        <Heading fontSize={{base: "1x", md: "2xl"}}>
          IDE
        </Heading>
        <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}}>
          <ListItem>
            Visual Studio Code
          </ListItem>
          <ListItem>
            Sublime Text 3
          </ListItem>
          <ListItem>
            Notepad ++
          </ListItem>
          <ListItem>
            Codeblock (c++)
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem spacing="25px" mt="20px" _hover={{
            marginTop: "10px",
            transition: "margin 0.8s",
          }}>
        <Stack >
          <Heading fontSize={{base: "1x", md: "2xl"}}>
            Version Control
          </Heading>
          <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}} pl="20px">
            <ListItem>
              Git (Git shell, Github)
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack mt="20px">
          <Heading fontSize={{base: "1x", md: "2xl"}}>
            Databases
          </Heading>
          <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}} pl="20px">
            <ListItem>
              MongoDB
            </ListItem>
          </UnorderedList>
        </Stack>
      </GridItem>
      <GridItem mt="20px" _hover={{
            marginTop: "10px",
            transition: "margin 0.8s",
          }}>
        <Heading fontSize={{base: "1x", md: "2xl"}}>
          Languages
        </Heading>
        <UnorderedList mt="10px" fontSize={{base: "15px", md: "20px"}}>
          <ListItem>
            German (Native)
          </ListItem>
          <ListItem>
            English (Conversational)
          </ListItem>
          <ListItem>
            Bulgarian (Native)
          </ListItem>
          <ListItem>
            Vietnamese (Native)
          </ListItem>
        </UnorderedList>
      </GridItem>
    </Grid>
  )
}