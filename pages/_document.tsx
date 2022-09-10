import { Html, Head, Main, NextScript } from 'next/document'
import { ResolveImage } from "../utils/utils"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Hi, i'm Thinh, this is my personal website. Here I will update everything about me :D"/>
        <meta name="keywords" content="Thinh, Thinh Nguyen, Personal, Website, Portfolio"/>
        <meta name="author" content="Thinh Nguyen"/>
        <meta property="og:title" content="Thinh Nguyen: Personal Website" />
        <meta property="og:description" content="Hi, i'm Thinh, this is my personal website. Here I will update everything about me :D" />
        <meta property="og:image" content={ResolveImage("Banner_bg.svg", 256, 256)} />
        <link rel="icon" href="/windows11/Square44x44Logo.scale-100.png"/>
        <link rel="manifest" href="/manifest.webmanifest"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}