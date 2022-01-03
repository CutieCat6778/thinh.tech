import '@fontsource/open-sans/400.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/archivo-black/400.css'

import {
  ChakraProvider, CSSReset,
} from "@chakra-ui/react"
import Theme from "./utils/theme"
import { AppRouter } from './routers'


export const App = () => (
  <ChakraProvider theme={Theme.theme}>
    <CSSReset />
    <AppRouter />
  </ChakraProvider>
)
