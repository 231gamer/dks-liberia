import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Prevent flash of unstyled content
    document.documentElement.classList.add('js')
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      {/* Vercel Analytics */}
      <Analytics />
    </>
  )
}
