import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      id="footer"
      mt="5rem"
    >
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        color="#555"
        maxW={"1000px"}
        h="100"
      >
        <GridItem rowSpan={2} colSpan={1} p="10px" maxW={"300px"} width={"fit-content"}>
          <Heading fontSize="2xl">Thinh Nguyen</Heading>
          <Text fontFamily={"Open Sans"} fontSize="sm" mt="0.5rem">
            All rights reserved © 2022 <br/>
            Germany, The earth <br/>
            <br/>
            No copy is allowed on this website, for more info, please email me!
          </Text>
        </GridItem>
        <GridItem colSpan={1} p="10px" width={"fit-content"}>
          <Heading fontSize="2xl">Socials</Heading>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={2}
            fontFamily="Open Sans"
            fontSize={"sm"}
            fontWeight="500"
            mt="0.5rem"
            width={"fit-content"}
          >
            <GridItem>
              <Link href="https://instagram.com/txzje">Instagram</Link>
            </GridItem>
            <GridItem>
              <Link href="https://github.com/CutieCat6778">Github</Link>
            </GridItem>
            <GridItem>
              <Link href="https://twitter.com/CutieCat_6778">Twitter</Link>
            </GridItem>
            <GridItem>
              <Link href="https://instagram.com/cameraonthehand">
                Photography
              </Link>
            </GridItem>
            <GridItem>
              <Link href="https://facebook.com/cat9289">Facebook</Link>
            </GridItem>
            <GridItem>
              <Link href="https://twitch.tv/txzje">Twitch</Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} p="10px" width={"fit-content"}>
          <Heading fontSize="2xl">Links</Heading>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={2}
            fontFamily="Open Sans"
            fontSize={"sm"}
            fontWeight="500"
            mt="0.5rem"
            width={"fit-content"}
          >
            <GridItem>
              <Link href="#header">Header</Link>
            </GridItem>
            <GridItem>
              <Link href="#intro">Info</Link>
            </GridItem>
            <GridItem>
              <Link href="#timeline">Timeline</Link>
            </GridItem>
            <GridItem>
              <Link href="#footer">Footer</Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={2} p="10px" fontFamily={"Open Sans"} fontSize="sm" maxWidth={"450px"} textAlign="center" width="100%">
            For more contact or collabrations, please email <Text fontSize="md" display={"inline"} fontWeight="600"><Link href="mailto:thinh@thinh.tech">thinh@thinh.tech</Link></Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}
