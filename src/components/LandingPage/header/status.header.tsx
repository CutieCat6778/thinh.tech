import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { GetStatus } from "../../../utils/api";
import { Status } from "../../../interfaces/api";

export default function StatusBox() {
    const [status, setStatus] = useState<Status | null>(null);

    const dummy = 1;

    useEffect(() => {
        if(!dummy) return;
        async function callApi() {
            const data = await GetStatus();
            if (data) return setStatus(data);
            else return;
        }
        setInterval(async () => {
            callApi()
        }, 3 * 60 * 1000)
        callApi();
    }, [dummy])

    return (
        <>
            {
                status && status.name ? <Flex justifyContent={"center"} maxWidth="16rem" width={"100%"} alignItems="center" margin={"1rem"}>
                    <Image src={status?.image} alt="Spotify Image" height={"5rem"} width="5rem" marginRight={"1rem"} />
                    <Box>
                        <Text fontSize={"0.8rem"}>Playing Spotify</Text>
                        <Heading fontSize={"auto"}>
                            {status?.name}
                        </Heading>
                    </Box>
                </Flex> : null
            }
        </>

    )
}