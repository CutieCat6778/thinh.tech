import '@fontsource/open-sans/400.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/archivo-black/400.css'

import {
  Box,
  ChakraProvider, CSSReset, Flex,
} from "@chakra-ui/react"
import theme from "./utils/theme"
import { AppRouter } from './routers'
import ParticlesBg from 'particles-bg'


export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex 
      h="100vh"
      justifyContent={"center"}>
      <CSSReset />
      <AppRouter />
    </Flex>
    <Box d={{base: "none", lg: "block"}}>
      <ParticlesBg color="#000000" type="polygon" bg={true}/>
    </Box>
    <Box d={{base: "block", lg: "none"}}>
      <ParticlesBg num={2} type="polygon" bg={true}/>
    </Box>
  </ChakraProvider>
)
