import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { GetStatus } from "../../../utils/api";
import { Status } from "../../../interfaces/api";
import { TextLinkBox } from "../section/skills.section";

interface RangeType {
    timestamp: number;
    duration: number;
}

function Timeconverter(timeRaw: number) {
    const time = Math.floor(timeRaw / 1000);
    const minuteRaw = Math.floor(time / 60);
    const minute = minuteRaw > 9 ? minuteRaw : `0${minuteRaw}`;
    const second = Math.floor(time % 60);
    return `${minute}:${second}`
}

function Range({ timestamp, duration }: RangeType) {
    const now = new Date().getTime();

    console.log(duration, now - timestamp)

    return (
        <Flex flexDir={"column"} alignItems="center" justifyContent={"center"} width="100%">
            <Input
                type={"range"}
                min={0}
                max={duration}
                value={now - timestamp}
                border={"none"}
                backgroundColor={"blackAlpha.600"}
                height="0.8rem"
                disabled />
            <Flex width={"100%"} alignItems="center" justifyContent={"space-between"}>
                <Text fontSize={"smaller"}>
                    {Timeconverter(now - timestamp)}
                </Text>
                <Text fontSize={"smaller"}>
                    {Timeconverter(duration)}
                </Text>
            </Flex>
        </Flex>
    )
}

export default function StatusBox() {
    const [status, setStatus] = useState<Status | null>(null);

    const dummy = 1;

    useEffect(() => {
        if (!dummy) return;
        async function callApi() {
            console.log("call")
            const data = await GetStatus();
            console.log(data);
            if (data) return setStatus(data);
            else return;
        }
        callApi();
        setInterval(async () => {
            callApi()
        }, 3 * 60 * 1000)
    }, [dummy])

    return (
        status && status.name ?
            <Flex
                justifyContent={"center"}
                width={"100%"}
                flexDir={"column"}
                alignItems="center" >
                <Image
                    src={status?.image[1].url}
                    alt="Spotify Image"
                    height={status?.image[1].height}
                    width={status?.image[1].width} />
                <Box width={"100%"}>
                    <Box my={"1rem"}>
                        <Text fontSize={"0.8rem"}>Playing Spotify</Text>
                        <Heading fontSize={"auto"} >
                            <TextLinkBox text={status?.name} url={status.url.spotify}/>
                        </Heading>
                    </Box>
                    <Range timestamp={status.timestamp} duration={status.duration} />
                </Box>
            </Flex>
            : <Flex>
                <Text>
                    Oh no, Thinh doesn&apos;t listen to Spotify right now!
                </Text>
            </Flex>
    )
}