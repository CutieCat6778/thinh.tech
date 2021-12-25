import { Image, Link, Stack } from "@chakra-ui/react";

export function SideBar(){
  return (
    <Stack
      userSelect={"none"}
      direction={{base: "row", lg: "column"}} spacing="15px" m="15px">
      <Link href="https://instagram.com/nhtt.2307">
        <Image boxSize={{base: "40px", lg:"50px"}} src="https://cutiecat6778.github.io/cdn/instagram.png" alt="Instagram logo"/>
      </Link>
      <Link href="https://github.com/CutieCat6778">
        <Image boxSize={{base: "40px", lg:"50px"}} src="https://cutiecat6778.github.io/cdn/github.png" alt="Instagram logo"/>
      </Link>
      <Link href="https://www.facebook.com/cat9289/">
        <Image boxSize={{base: "40px", lg:"50px"}} src="https://cutiecat6778.github.io/cdn/facebook.png" alt="Instagram logo"/>
      </Link>
      <Link href="mailto:thinhnguyenhuuhung@gmail.com">
        <Image boxSize={{base: "40px", lg:"50px"}} src="https://cutiecat6778.github.io/cdn/gmail.png" alt="Instagram logo"/>
      </Link>
    </Stack>
  )
}