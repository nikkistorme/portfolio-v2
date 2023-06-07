import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* font-family: 'Josefin Sans', sans-serif; */}
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet" />
        {/* font-family: 'Frank Ruhl Libre', serif; */}
        <link href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap" rel="stylesheet" />
        {/* font-family: 'Raleway', sans-serif; */}
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
