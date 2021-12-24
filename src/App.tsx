import '@fontsource/open-sans/400.css'

import {
  ChakraProvider, CSSReset, Flex,
} from "@chakra-ui/react"
import { Main } from "./pages/Main"
import theme from "./utils/theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex 
      h="100vh"
      backgroundColor={"#23272A"}
      justifyContent={"center"}>
      <CSSReset />
      <Main />
    </Flex>
  </ChakraProvider>
)
