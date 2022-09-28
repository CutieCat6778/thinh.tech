import { Box } from "@chakra-ui/react"
import { FC } from "react"
import { ArticleMeta } from "../../types/article"
import Footer from "./footer"
import Header from "./header"
import Section from "./section"

interface Props {
  articles: ArticleMeta[]
}

const Main: FC<Props> = ({articles}) => {
  return (
    <Box height="100%" width="100%">
      <Header/>
      <Section articles={articles}/>
      <Footer/>
    </Box>
  )
}

export default Main