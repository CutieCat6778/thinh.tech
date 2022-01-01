import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

export function SectionEducation() {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={{base: "center", md:"space-between"}} flexDir={{base: "column-reverse", md: "row"}}>
        <Box>
          <Heading>
            <Link d="inline" href="https://smg.bg/" fontWeight={"600"}>
              Sofia Math Highschool
            </Link>
          </Heading>
          <Text maxW="400px" mt="30px" fontSize={"20px"}>
            We are СМГ, the top 1 school in Bulgaria. We are mathematician and we love math.
          </Text>
        </Box>
        <Image alt="Smg Logo" boxSize={"175px"} src="https://cutiecat6778.github.io/cdn/smg.png" mr={{base: 0, md:"75px"}} />
      </Flex>
      <Flex mt="50px" alignItems={"center"} justifyContent={{base: "center", md:"space-between"}} flexDir={{base: "column-reverse", md: "row"}}>
        <Box>
          <Heading mt={{base: "15px", md: 0}}>
            <Link d="inline" href="https://www.bickebergschule-vs.de/startseite" fontWeight={"600"}>
              Bickebergschule
            </Link>
          </Heading>
          <Text maxW="400px" mt="30px" fontSize={"20px"}>
            It is a german school with many friendly people, the teachers are the best. Shout out to <Text d="inline-block" fontWeight={"600"}>Mr. Todt</Text>.
          </Text>
        </Box>
        <Image alt="Bickeberg logo" boxSize={{base: "40%",md:"20%"}} src="https://cutiecat6778.github.io/cdn/bickeberg.png" mr={{base: 0, md:"75px"}} />
      </Flex>
    </Box >
  )
}