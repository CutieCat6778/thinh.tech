import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ResUserPresence } from "../../../interface/user";
import { ResolveActivity, ResolveSpotifyURL } from "../../../utils/resolveString";
import HeaderStatusBoxCustom from "./_header_status_custom";

const HeaderStatusBox: React.FC<ResUserPresence | null> = ({ data }) => {
  return (
    <Box>
      {
        data.type === "CUSTOM" ? <HeaderStatusBoxCustom data={data}/> : <Flex>
        {
          data.assets && data.name === "Spotify" ? <Image boxSize={{base: "40px", lg:"50px"}} src={ResolveSpotifyURL(data.assets.largeImage?.split(":")[1])} fallbackSrc="https://cutiecat6778.github.io/cdn/discord-icon.png"/> : (
            data.assets && data.name === "Visual Studio Code" ? <Image boxSize={{base: "40px", lg:"50px"}} src={"https://cutiecat6778.github.io/cdn/vscode.png"} fallbackSrc="https://cutiecat6778.github.io/cdn/discord-icon.png"/> : 
            <Image boxSize={{base: "40px", lg:"50px"}} src={"https://cutiecat6778.github.io/cdn/discord-icon.png"}/>
          )
        }
        <Box ml="10px" color="black">
          <Text fontSize={{base: "sm", lg:"lg"}} color={"gray.700"}>
            {ResolveActivity(data.type)} {data.name}
          </Text>
          <Heading fontSize={{base: "1xl", lg:"2xl"}}>
            {data.details && data.details.length < 10 ? data.details : data.assets?.largeText}
          </Heading>
        </Box>
      </Flex>
      }
    </Box>
    
  )
}

export default HeaderStatusBox;