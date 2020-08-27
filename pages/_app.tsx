import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'

import Header from 'components/Header'
import Footer from 'components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Learning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          :root {
            --color-primary: #cc6f78;
          }

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
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
