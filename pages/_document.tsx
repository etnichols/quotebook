// pages/_document.js
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>quotebook.xyz</title>
        <meta name="description" content="A simple quotebook" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Arvo:400,700|Noto+Serif:400,700,ital"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
