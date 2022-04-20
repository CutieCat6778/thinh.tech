import { Box, Flex, forwardRef, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react"
import React from "react"
import { Spotify } from "./icon.aside"
import StatusBox from "./status.aside"

const SpotifyIcon = forwardRef((props, ref) => {
    return (
        <Box ref={ref} {...props}>
            <Spotify />
        </Box>
    )
})

export default function AsideMobile() {
    return (
        <Flex zIndex={1} height="100%" m={"1rem"} marginLeft="auto">
            <Popover isLazy>
                <PopoverTrigger>
                    <SpotifyIcon color="#1DB954" fontSize="2rem"/>
                </PopoverTrigger>
                <PopoverContent
                    border={"none"}
                    _focus={{
                        "border": "none"
                    }}
                    _selected={{
                        "border": "none"
                    }}
                    _selection={{
                        "border": "none"
                    }}
                    _active={{
                        "border": "none"
                    }}
                    m={"1rem"}
                    p={"1rem"}
                >
                    <StatusBox/>
                </PopoverContent>
            </Popover>
        </Flex>
    )
}