import '@fontsource/open-sans/400.css'

import {
  ChakraProvider, CSSReset, Flex,
} from "@chakra-ui/react"
import theme from "./utils/theme"
import { AppRouter } from './routers'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex 
      h="100vh"
      backgroundColor={"#23272A"}
      justifyContent={"center"}>
      <CSSReset />
      <AppRouter />
    </Flex>
  </ChakraProvider>
)
