import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'

import Header from 'components/Header'
import Footer from 'components/Footer'

import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          body {
            height: 100%;
            text-align: center;
          }
        `}
      />
      <Header text="Emotion Component + Prop" emojis={['☕️', '🧁']} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
