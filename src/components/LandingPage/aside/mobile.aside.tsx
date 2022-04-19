import { Box, Flex, forwardRef, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react"
import React from "react"
import { BsSpotify } from "react-icons/bs"
import StatusBox from "./status.aside"

const Spotify = forwardRef((props, ref) => {
    return (
        <Box ref={ref} {...props}>
            <BsSpotify />
        </Box>
    )
})

export default function AsideMobile() {
    return (
        <Flex zIndex={1} height="100%" m={"1rem"} marginLeft="auto">
            <Popover isLazy>
                <PopoverTrigger>
                    <Spotify color="#1DB954" fontSize="2rem"/>
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