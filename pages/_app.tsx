import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import { ResolveImage } from "../utils/utils"
import "@fontsource/comfortaa"
import "@fontsource/pt-serif"
import "@fontsource/open-sans"
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from "../utils/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thinh Nguyen: Personal Site</title>
        <meta name="description" content="Hi, i'm Thinh, this is my personal website. Here I will update everything about me :D"/>
        <meta name="keywords" content="Thinh, Thinh Nguyen, Personal, Website, Portfolio"/>
        <meta name="author" content="Thinh Nguyen"/>
        <meta property="og:title" content="Thinh Nguyen: Personal Website" />
        <meta property="og:description" content="Hi, i'm Thinh, this is my personal website. Here I will update everything about me :D" />
        <meta property="og:image" content={ResolveImage("Banner_bg.svg", 256, 256)} />
        <link rel="icon" href="/windows11/Square44x44Logo.scale-100.png"/>
        <link rel="manifest" href="/manifest.webmanifest"/>
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset/>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
