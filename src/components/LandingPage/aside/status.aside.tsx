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

// interface NewStatus {
//     estimatedEnds: number;
//     timestamp: number;
// }

function Timeconverter(timeRaw: number) {
    const time = Math.floor(timeRaw / 1000);
    const minuteRaw = Math.floor(time / 60);
    const minute = minuteRaw > 9 ? minuteRaw : `0${minuteRaw}`;
    const secondRaw = Math.floor(time % 60);
    const second = secondRaw > 9 ? secondRaw : `0${secondRaw}`;
    return `${minute}:${second}`
}

function Range({ timestamp, duration }: RangeType) {
    const now = new Date().getTime();

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
                <Text fontSize={"1rem"}>
                    {Timeconverter(now - timestamp)}
                </Text>
                <Text fontSize={"1rem"}>
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
            const data = await GetStatus();
            if (data) {
                data.estimatedEnds = data.timestamp + data.duration;
                return setStatus(data);
            }
            else return;
        }
        // function updateTimer() {
        //     if (status?.estimatedEnds && status.timestamp) {
        //         const now = new Date().getTime()
        //         const newStatus: NewStatus = {
        //             estimatedEnds: status?.estimatedEnds,
        //             timestamp: status?.timestamp
        //         };
        //         if (newStatus) {
        //             if (now >= newStatus.estimatedEnds) return callApi();
        //             newStatus.timestamp = now;
        //             console.log(newStatus.timestamp);
        //             setStatus({
        //                 image: status.image,
        //                 timestamp: newStatus.timestamp,
        //                 duration: status.duration,
        //                 name: status.name,
        //                 isPlaying: status.isPlaying,
        //                 estimatedEnds: status.estimatedEnds,
        //                 url: status.url,
        //             });
        //         }
        //     }
        // }
        if(!status) callApi();
    }, [dummy, status])

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
                            <TextLinkBox text={status?.name} url={status.url.spotify} />
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