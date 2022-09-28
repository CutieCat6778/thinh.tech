import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import "@fontsource/comfortaa"
import "@fontsource/pt-serif"
import "@fontsource/open-sans"
import "@fontsource/space-mono"
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from "../utils/theme"
import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thinh Nguyen: Personal Site</title>
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset/>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
