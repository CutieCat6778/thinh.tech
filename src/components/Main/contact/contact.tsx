import {
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaInstagramSquare, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Contact() {
  return (
      <Stack
        d={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        userSelect={"none"}
        direction={"row"}
        spacing="15px"
        m="15px"
        ml="30px"
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
  );
}
