import { Flex, Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react"

export function SectionSkill(){
  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={"row"}>
      <Stack spacing="10px" d="block">
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            Programming languages
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              Javascript, Typescript
            </ListItem>
            <ListItem>
              HTML, CSS
            </ListItem>
            <ListItem>
              Python, Go Lang, C++
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            Frameworks
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              ReactJS, ChakraUI
            </ListItem>
            <ListItem>
              NestJS, Express
            </ListItem>
            <ListItem>
              NodeJS, Webpack
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
      <Stack spacing="10px" d="block" ml="30px">
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            Databases
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              MongoDB
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            Version control
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              Git (Git Shell, Github)
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            IDE
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              Sublime Text 3
            </ListItem>
            <ListItem>
              Visual Studio Code
            </ListItem>
            <ListItem>
              Code Block (C++)
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
      <Stack spacing="10px" d="block" ml="30px">
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            Foreign Language
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              English (B1)
            </ListItem>
            <ListItem>
              German (Native)
            </ListItem>
            <ListItem>
              Bulgarian (Native)
            </ListItem>
            <ListItem>
              Vietnamese (Mother Language)
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack spacing="10px">
          <Heading fontSize={"20px"}>
            Other skills
          </Heading>
          <UnorderedList pl="15px">
            <ListItem>
              Kubernetes, Docker
            </ListItem>
            <ListItem>
              REST API
            </ListItem>
            <ListItem>
              Linux (Ubuntu, Arch)
            </ListItem>
            <ListItem>
              VPS/DNS/Domains
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Flex>
  )
}