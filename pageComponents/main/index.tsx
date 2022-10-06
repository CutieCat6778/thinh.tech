import { Box } from "@chakra-ui/react"
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
      <Footer/>
    </Box>
  )
}

export default Main