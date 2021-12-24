import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ResUserPresence } from "../../../interface/user";
import { ResolveActivity, ResolveSpotifyURL, ResolveTimestamp } from "../../../utils/resolveString";

const HeaderStatusBox: React.FC<ResUserPresence | null> = ({ data }) => {
  return (
    <Flex>
      {
        data.assets && data.name === "Spotify" ? <Image boxSize={"65px"} src={ResolveSpotifyURL(data.assets.largeImage?.split(":")[1])} fallbackSrc="https://cutiecat6778.github.io/cdn/discord-icon.png"/> : (
          data.assets && data.name === "Visual Studio Code" ? <Image boxSize={"65px"} src={"https://cutiecat6778.github.io/cdn/vscode.png"} fallbackSrc="https://cutiecat6778.github.io/cdn/discord-icon.png"/> : 
          <Image src="https://cutiecat6778.github.io/cdn/discord-icon.png" />
        )
      }
      <Box ml="10px" color="white">
        <Text size="lg" color={"gray.400"}>
          {ResolveActivity(data.type)} {data.name} | {ResolveTimestamp(data.createdTimestamp)} ago
        </Text>
        <Heading>
          {data.details && data.details.length < 10 ? data.details : data.assets?.largeText}
        </Heading>
      </Box>
    </Flex>
  )
}

export default HeaderStatusBox;