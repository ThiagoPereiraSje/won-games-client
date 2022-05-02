import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/png"
          sizes="32x32"
        />

        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
