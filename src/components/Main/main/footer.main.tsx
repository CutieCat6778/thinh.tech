import { Box, Divider, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box mt="50px">
      <Divider />
      <Text mt="25px" fontFamily={"Open Sans"} textAlign={"center"}>
        2022© All rights reserved by Thinh Nguyen
      </Text>
    </Box>
  );
}
