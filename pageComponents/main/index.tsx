import { Box, Divider, Flex } from "@chakra-ui/react"
import { FC } from "react"
import { ArticleInfo } from "../../types/article"
import Footer from "./footer"
import Header from "./header"
import Section from "./section"

interface Props {
  posts: ArticleInfo[]
}

const Main: FC<Props> = ({posts}) => {
  return (
    <Box height="100%" width="100%">
      <Header/>
      <Section posts={posts}/>
      <Box width={"100%"} opacity="0.6" px={{base: "4vw", md: "30vw"}}>
        <Divider my="3rem" mt="5rem" borderColor={"black"} />
      </Box>
      <Footer/>
    </Box>
  )
}

export default Main