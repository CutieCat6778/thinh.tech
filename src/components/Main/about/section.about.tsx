import { Link, Text } from "@chakra-ui/react";

export function SectionAbout(){
  return(
    <Text fontSize={"20px"} fontFamily={"Space Mono"}>
      From <Text fontWeight={"600"} d="inline-block">asia</Text>, proud of my country <Link href="https://en.wikipedia.org/wiki/vietnam" fontWeight={"600"}>Vietnam</Link>. Currently I'm living in <Link href="https://en.wikipedia.org/wiki/germany" fontWeight={"600"}>Germany, Europe </Link>
      and building my own life their. I'm a self taught programmer and started to code since I was fifth class. Working with computer is alway my favorite things to do since I have borned. I still want to learn and improve my programming skill and prepare for my future.
    </Text>
  )
}