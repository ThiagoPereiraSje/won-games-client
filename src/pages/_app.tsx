import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
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

        <meta name="description" content="The Best Game Store in the World!" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
