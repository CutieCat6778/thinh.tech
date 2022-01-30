import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import { GenId } from "../../../utils/tools";
import { NewText } from "../../Text";
import { FaInstagramSquare, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Contact() {
  const arrays = "Contact".split("");
  const Items = arrays.map((a) => (
    <NewText text={a} key={`${arrays.indexOf(a)}-${GenId()}-con`} />
  ));

  return (
    <Box mt="100px" id="contact">
      <Flex
        minH={"100px"}
        minW="200px"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading fontSize={"5xl"} fontFamily={"Space Mono"}>
          {Items}
        </Heading>
      </Flex>
      <Divider mb="25px" marginTop={"15px"} />
      <Stack
        d={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt="75px"
        userSelect={"none"}
        direction={"row"}
        spacing="15px"
        m="15px"
      >
        <Link href="https://instagram.com/txzje">
          <Icon as={FaInstagramSquare} boxSize={{ base: "40px", lg: "50px" }} />
        </Link>
        <Link href="https://github.com/CutieCat6778">
          <Icon as={FaGithubSquare} boxSize={{ base: "40px", lg: "50px" }} />
        </Link>
        <Link href="https://www.facebook.com/cat9289/">
          <Icon as={FaFacebookSquare} boxSize={{ base: "40px", lg: "50px" }} />
        </Link>
        <Link href="mailto:thinhnguyenhuuhung@gmail.com">
          <Icon as={MdEmail} boxSize={{ base: "40px", lg: "50px" }} />
        </Link>
      </Stack>
    </Box>
  );
}
