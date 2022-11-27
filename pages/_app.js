import '../styles/main.scss'
import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}