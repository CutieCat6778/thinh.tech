import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/images/icons/icon-72x72.png"/>
        <div class="cf-turnstile" data-sitekey="0x4AAAAAAAJebo1jj1wpiPmJ" data-callback="javascriptCallback"></div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
