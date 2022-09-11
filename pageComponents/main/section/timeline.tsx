import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ResolveImage } from "../../../utils/utils";

export default function Timeline() {
  return (
    <Stack width={"100%"} p="1rem" spacing={"7vw"}>
      <Moddy />
      <Helios />
      <GleasonIntern />
    </Stack>
  );
}

function Moddy() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      flexDir={{ base: "column", lg: "row-reverse" }}
    >
      <Image
        src={ResolveImage("moddy/moddy.png", 300, 300)}
        height="300"
        width={"300"}
        alt="Moddy profile picture"
        style={{ borderRadius: "10%" }}
      />
      <Box mr={{base: "0", lg: "5rem"}} mt={{base: "4vw", lg: 0}}>
        <Heading>Moddy (Open-source)</Heading>
        <Text fontFamily={"Space Mono"}>02/2022 - 04/2021</Text>
        <Box mt="2rem" maxW="600px" fontFamily={"Pt Serif"}>
          It is a open-source project, it is a discord bot project that allow
          user to control their community via a simple commmand. It has many
          integrated APIs and utility functions. Currently it is out-dated and
          only support discord.js@12.x.x which is outdated
          <Box mt="1rem" color="black">
            <Link href="https://github.com/CutieCat6778/moddy-djs">
              <Button variant={"link"} minW="100px" color="black">
                <Image
                  src={ResolveImage("icon/github.svg", 32, 32)}
                  height="32px"
                  width="32px"
                  alt="Github logo"
                />{" "}
                Github
              </Button>
            </Link>
            <Link href="https://moddy.js.org">
              <Button variant={"link"} ml="1rem" minW="100px" color="black">
                <Image
                  src={ResolveImage("icon/browser.svg", 32, 32)}
                  height="32px"
                  width="32px"
                  alt="Website logo"
                />{" "}
                Website
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

function Helios() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Image
        src={ResolveImage("icon/helios.png", 300, 166.66)}
        width="300px"
        height={"166.66px"}
        alt="Helios ventilatoren profile picture"
        style={{ borderRadius: "10%" }}
      />
      <Box ml={{base: "0", lg: "5rem"}} mt={{base: "4vw", lg: 0}}>
        <Heading>Helios (Intern)</Heading>
        <Text fontFamily={"Space Mono"}>06/2020 - 07/2020</Text>
        <Box mt="2rem" maxW="600px" fontFamily={"Pt Serif"}>
          Helios Ventilatoren GmbH is a company about air conditioner, I worked
          there as a Systemadminsitator, from there I have learned about Server,
          Networking and Office structure. I also learned how to setup a server
          and operating system, setting up a web application with kubernetes.
          <Box mt="1rem" color="black">
            <Link href="https://www.heliosventilatoren.de/de/">
              <Button variant={"link"} ml="1rem" minW="100px" color="black">
                <Image
                  src={ResolveImage("icon/browser.svg", 32, 32)}
                  height="32px"
                  width="32px"
                  alt="Github logo"
                />
                Website
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

function GleasonIntern() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      flexDir={{ base: "column", lg: "row-reverse" }}
    >
      <Image
        src={ResolveImage("icon/gleason.png", 300, 200)}
        width="300px"
        height={"200px"}
        alt="Gleason profile picture"
        style={{ borderRadius: "10%" }}
      />
      <Box mr={{base: "0", lg: "5rem"}} mt={{base: "4vw", lg: 0}}>
        <Heading>Gleason Cuttings Tools GbmH (Intern)</Heading>
        <Text fontFamily={"Space Mono"}>05/2021 - 06/2021</Text>
        <Box mt="2rem" maxW="600px" fontFamily={"Pt Serif"}>
          Gleason Cuttings Tools GmbH is a logistic company that makes gear and cutting tools for metal. They have a really big automation robots that allow them to produce their product 24/7, it really surprised me how the structure of their company. I had a chance to work there as a Systemadminsitrator, to responcible for any client problem and repair them.
          <Box mt="1rem" color="black">
            <Link href="https://www.gleason.com/">
              <Button variant={"link"} ml="1rem" minW="100px" color="black">
                <Image
                  src={ResolveImage("icon/browser.svg", 32, 32)}
                  height="32px"
                  width="32px"
                  alt="Website logo"
                />
                Website
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}